#include<request.h>
#include<string.h>
#include<stdio.h>
#include<headers.h>
#include<error.h>
#include<cache.h>
#include<stdlib.h>
#include <sys/socket.h>
#include<bst.h>

char *mimeNames[] = {"html", "jpeg", "css", "js", "json", "txt", "gif", "png"};

char *resolvedNames[] = {"text/html", "image/jpeg", "text/css", "text/javascript", "application/json", "text/plain", "image/gif", "image/png"};

static char * mime_map[MIME_TYPE_HASH_MODULUS];

void create_mimetypes() {
    //simple hash function , add all characters and % by some number
    int i , j;
    for(i = 0; i < 8; i++) {
        char * mime = mimeNames[i];
        int hash = 0;
        while(*mime) {
            hash = hash + *mime;
            mime ++;
        }

        int hash_index = hash % MIME_TYPE_HASH_MODULUS;
        mime_map[hash_index] = resolvedNames[i];
    }
}

char * resolve_mime_type(char * filePath) {
    char file[100];
    strcpy(file, filePath);

    strtok(file, ".");
    char * ext = strtok(NULL, ".");
    int hash = 0;
    while(*ext) {
        hash = hash + *ext;
        ext ++;
    }
    return mime_map[hash % MIME_TYPE_HASH_MODULUS];
}


void default_static_handler(char * request_data, int fd) {

    char * body = strstr(request_data, "\r\n\r\n");

    if(body != NULL) {
         body +=4;
    //nullify the body, as we are not dealing with it now
        * body = '\0'; 
    }

    parse_headers(request_data);
    if(strcmp(get_request_method(), "GET") != 0) {
        throw_error("Static server can work only with GET requests");
    } 

    /* process mime type*/
    char * route = get_request_route();
    char * mime_type = resolve_mime_type(route);

    if(mime_type == NULL) mime_type = "text/plain";

    route ++;
    struct fileData * File = read("./static", route);

    if(File == NULL) {
        //return 404
        set_response_main_header("HTTP/1.1", "404", "Not Found");
        set_response_header("Connection", "close");
        set_response_header("Server", "FastServ/1.1");

        //send empty response : 
        char * response_buffer = (char *)malloc(RESPONSE_BUFFER_SIZE);
        stringify_response_headers(response_buffer);

        int rv = send(fd, response_buffer, strlen(response_buffer), 0);
        if(rv == 0) throw_error("Error sending 404 response\n");
    }

    else {
        //frame response headers :
        set_response_main_header("HTTP/1.1", "200", "OK");

        set_response_header("Connection", "close");
        set_response_header("Server", "FastServ/1.1");
        set_response_header("Content-Type", mime_type); 

        char *  response_buffer_header = (char *)malloc(RESPONSE_BUFFER_SIZE);

        stringify_response_headers(response_buffer_header);

    //allocate entire body 
        char * response_buffer = (char * )malloc(strlen(response_buffer_header) + File->size + 10);

        strcpy(response_buffer, response_buffer_header);
        strcat(response_buffer, "\r\n\r\n");
        strcat(response_buffer, File->data);
        strcat(response_buffer, "\r\n\r\n");

    //printf("Response Header : %s\n", response_buffer);
        int rv = send(fd, response_buffer, strlen(response_buffer), 0);

        free(response_buffer_header);
        free(response_buffer); 

        if(rv < 0) throw_error("Error sending data\n");
    }
    
    clear_headers();

}
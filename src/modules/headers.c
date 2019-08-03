#include<headers.h>
#include<stdlib.h>
#include<error.h>
#include<string.h>
#include<stdio.h>

//a static root node with 0 entries
static HeaderNode * root = 0;
static HeaderNode * response = 0;
static MainHeader * mainHeader = 0;
static MainResponseHeader * mainResponseHeader = 0;

void set_response_header(char * header_name, char * header_value) {
    if(response == NULL) {
        //create a root node :
        response = (HeaderNode *)malloc(sizeof(HeaderNode));
        response->Header.header_name = header_name;
        response->Header.header_value = header_value;
        response->next = 0;
    } else {
        HeaderNode * node = (HeaderNode *)malloc(sizeof(HeaderNode));
        node->Header.header_name = header_name;
        node->Header.header_value = header_value;
        node->next = 0;

        //traverse the root node and insert :
        HeaderNode * traverse_node = response;
        while(traverse_node->next != NULL) traverse_node = traverse_node->next;
        
        traverse_node->next = node;
    }
}

void set_response_main_header(char * version, char * status_code, char * status) {
    mainResponseHeader = (MainResponseHeader *)malloc(sizeof(MainResponseHeader));
    mainResponseHeader->http_version = version;
    mainResponseHeader->status_code = status_code;
    mainResponseHeader->status = status;
}

void create_header_node(char * string) {    
    char * header_name = strtok(string, ":");
    char * header_value = strtok(NULL, ":");
    
    if(header_value == NULL) throw_error("Invalid header string");

    if(root == NULL) {
        //create a root node :
        root = (HeaderNode *)malloc(sizeof(HeaderNode));
        root->Header.header_name = header_name;
        root->Header.header_value = header_value;
        root->next = 0;
    } else {
        HeaderNode * node = (HeaderNode *)malloc(sizeof(HeaderNode));
        node->Header.header_name = header_name;
        node->Header.header_value = header_value;
        node->next = 0;

        //traverse the root node and insert :
        HeaderNode * traverse_node = root;
        while(traverse_node->next != NULL) traverse_node = traverse_node->next;

        traverse_node->next = node;
    }
}

void create_main_header(char * main_header_string) {
    char * copy_string = main_header_string;

    mainHeader = (MainHeader *)malloc(sizeof(MainHeader));

    mainHeader->http_method = strtok(copy_string, " ");
    mainHeader->http_route = strtok(NULL, " ");
    mainHeader->http_version = strtok(NULL, " ");
}

char * get_header_value(char * header_name) {
    HeaderNode * traversal_node = root;
    while(traversal_node != NULL) {
        if(strcmp(traversal_node->Header.header_name, header_name) == 0) return traversal_node->Header.header_value;
        traversal_node = traversal_node->next;
    }
    return NULL;
}

char * get_request_method() {
    return mainHeader->http_method;
}

char * get_request_route() {
    return mainHeader->http_route;
}

char * get_request_version() {
    return mainHeader->http_version;
}

//the main method of headers
void parse_headers(char * header_) {
    //First line is for main header:
    char header[4096];
    int header_lines = 0;
    char * rest = header, * token;

    strcpy(header, header_);
    while((token = __strtok_r(rest, "\r\n", &rest)) != NULL) {
        if(header_lines == 0) create_main_header(token);
        else create_header_node(token);
        header_lines ++;
    }
}

void stringify_response_headers(char * buffer) {
    //O(n) time complexity :

    strcpy(buffer, mainResponseHeader->http_version);
    strcat(buffer , " ");
    strcat(buffer, mainResponseHeader->status_code);
    strcat(buffer , " ");
    strcat(buffer, mainResponseHeader->status);
    strcat(buffer , "\r\n");

    //now copy each header to buffer :

    HeaderNode * traversal = response;
    while(traversal != NULL) {
        strcat(buffer, traversal->Header.header_name);
        strcat(buffer, ":");
        strcat(buffer, traversal->Header.header_value);
        strcat(buffer, "\r\n");

        traversal = traversal->next;
    }
}

void header_summary() {
    printf("\n---Main Header---\n");
    printf("Request Type : %s\n", mainHeader->http_method);
    printf("Route Name : %s\n", mainHeader->http_route);
    printf("HTTP Version : %s\n", mainHeader->http_version);
    printf("\n------------------\n");
    
    HeaderNode * traversal = root;
    while(traversal != NULL) {
        printf("%s : %s\n", traversal->Header.header_name, traversal->Header.header_value);
        traversal = traversal->next;
    }
}

void clear_headers() {
    root = 0;
    mainHeader = 0;
    response = 0;
    mainResponseHeader = 0;
}






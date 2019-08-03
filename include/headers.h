#ifndef __HEADERS_H
#define __HEADERS_H

//Headers are implemented as linked lists :
//O(1) insertion time, memory efficient data structure

//Data Types

#define HEADER_DELIM "\r\n"
#define HEADER_SEPERATOR "\r\n\r\n"

struct header {
    char * header_name;
    char * header_value;
};

typedef struct header_node_t {
    struct header Header;
    struct header_node_t * next;
} HeaderNode;

typedef struct main_header_t {
    char * http_method;
    char * http_route;
    char * http_version;
} MainHeader;

typedef struct main_response_header_t {
    char * http_version;
    char * status_code;
    char * status;
} MainResponseHeader;

//functions :
void create_main_header(char * main_header_string);

void create_header_node(char * header_string);

char * get_header_value(char * header_name);

char * get_request_method();

char * get_request_route();

char * get_request_version();

void parse_headers(char * header);

void header_summary();

void set_response_header(char * header_name, char * header_value);

void set_response_main_header(char * version, char * status_code, char * status);

void stringify_response_headers(char * buffer);

void clear_headers();

#endif
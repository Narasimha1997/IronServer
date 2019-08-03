#ifndef __REQUEST_H

#define __REQUEST_H

#define MIME_COUNT 6
#define MIME_TYPE_HASH_MODULUS 11

#define STATIC_ROOT "./static"

#define RESPONSE_BUFFER_SIZE 4096

void create_mimetypes();

char * resolve_mime_type(char * filePath);

void default_static_handler(char * request_data, int fd);

#endif
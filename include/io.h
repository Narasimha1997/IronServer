#ifndef __IO_H
#define __IO_H



struct fileData {
    char * filename;
    unsigned long hash;
    char *data;
    unsigned int size;
};
//loads the file and returns a pointer 
struct fileData * save_file_to_cache(char * filename, char * serverStaticRoute, unsigned long hash);

#endif
#include<io.h>
#include<stdio.h>
#include<stdlib.h>
#include<string.h>

unsigned int get_file_size(FILE * fd) {
    fseek(fd, 0, SEEK_END);
    return ftell(fd);
}


//saves to main-memory and returns its address 
struct fileData * save_file_to_cache(char * filename, char * static_root, unsigned long hash) {
    char filepath[512] = "";
    strcat(filepath, static_root);
    strcat(filepath, "/");
    strcat(filepath, filename);

    FILE * fd = fopen(filepath, "rb");

    if(fd == NULL) {
        return NULL;
    }
    
    unsigned int size = get_file_size(fd);

    //read the file data : 
    //create a file buffer using file node struct
    struct fileData *FileData = (struct fileData *)malloc(sizeof(struct fileData));
    FileData->filename = filepath;
    FileData->hash = hash;
    FileData->data = (char *)malloc((size + 1) * sizeof(char));
    FileData->size = size;

    //move to begenning of the file

    fseek(fd, 0, SEEK_SET); 
    fread(FileData->data, 1, size, fd);

    fclose(fd);

    return FileData;
}
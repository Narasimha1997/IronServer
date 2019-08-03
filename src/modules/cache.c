#include<cache.h>
#include<stdlib.h>
#include<stdio.h>
#include<hash.h>
#include<bst.h>
#include<io.h>


struct fileData * cache_read(unsigned long hash, char * filename, char * staticPath) {
    struct lookup_entry * cacheEntry = lookup(hash);
    //check if it is a hit or miss : 
    if(cacheEntry != NULL) {
        //verify the hash and return the FileData :
        struct fileData * File = cacheEntry->filePointer;

        if(cacheEntry->hashKey == hash && File->hash == hash && File->hash == cacheEntry->hashKey)
            //all possible comparisions 
            return File;
        else {
            printf("Hash verification falied\n");
            return NULL;
        }
    } else {
        struct fileData * File = save_file_to_cache(filename, staticPath, hash);
        //save a copy to cache :
        if(File == NULL) {
            return NULL;
        }

        insert_bst_node(hash, File);
        return File;
    }
}


struct fileData * read(char * static_path, char * route) {
    //compute hash over route : 
    unsigned long hash =  sdbm(route);
    return cache_read(hash, route, static_path);
}
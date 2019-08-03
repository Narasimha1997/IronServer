#ifndef __CACHE_H
#define __CACHE_H

#include<io.h>

unsigned long compute_hash(char * route);

//return NULL, on cache miss
struct fileData * cache_read(unsigned long hash, char * file, char * staticroot);

struct fileData * cache_write(struct fileData * fData, unsigned long hash);

struct fileData * read(char * static_path, char * route);


#endif
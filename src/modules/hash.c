#include<hash.h>

/*
  I was looking for an efficient hashing algorithm, 
  I found SDBM, It is used in berkely database
  For more info : http://www.cse.yorku.ca/~oz/hash.html
*/

unsigned long sdbm(char * string) {
    unsigned long hash = 0;
    while(*string) {
        hash = *string + (hash << 6) + (hash << 16) - hash;
        string++;
    }
    return hash;
}

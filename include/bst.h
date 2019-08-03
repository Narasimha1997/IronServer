#ifndef __BST_H
#define __BST_H

#include<io.h>

struct lookup_entry {
    unsigned long hashKey;
    struct fileData * filePointer;
};

typedef struct lookup_node {
    struct lookup_entry Entry;
    struct lookup_node * left;
    struct lookup_node * right;
} CacheBSTNode;


void insert_bst_node(unsigned long key, struct fileData * data);

struct lookup_entry * lookup(unsigned long key);

void inorder();

#endif
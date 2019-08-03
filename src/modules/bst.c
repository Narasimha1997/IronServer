#include<bst.h>
#include<stdlib.h>
#include<stdio.h>
#include<io.h>

//The root node of BST
static CacheBSTNode * root = 0;

CacheBSTNode * create_node(unsigned long key, struct fileData * fileData) {
    CacheBSTNode * node = (CacheBSTNode *)malloc(sizeof(CacheBSTNode));
    node->Entry.hashKey = key;
    node->Entry.filePointer = fileData;
    node->left = NULL;
    node->right = NULL;

    return node;
}

CacheBSTNode * insert_r(CacheBSTNode * node, unsigned long key, void * data) {
    if(node == NULL) {
        return create_node(key, data);
    }
    else if(key > node->Entry.hashKey) {
        node->right = insert_r(node->right, key, data);
    }
    else if(key < node->Entry.hashKey) {
        node->left = insert_r(node->left, key, data);
    }

    return node;
}

void insert_bst_node(unsigned long key, struct fileData * data) {
    //recursive traversal :
    if(root == NULL) 
        //root node is null, create root node :
        root = create_node(key, data);
    else {
        CacheBSTNode * walkNode = root;
        insert_r(walkNode, key, data);
    }
}

struct lookup_entry * lookup(unsigned long key) {
    //iterative search O(logn)

    CacheBSTNode * node = root;

    while(node != NULL) {
        if(key == node->Entry.hashKey) return &(node->Entry);
        else if(key > node->Entry.hashKey) node = node->right;
        else node = node->left;
    }

    return NULL;
}

void inorder_r(CacheBSTNode * node) {
    if(node == NULL) return;

    inorder_r(node->left);
    printf("%ld ", node->Entry.hashKey);
    inorder_r(node->right);
}

void inorder() {
    CacheBSTNode * node = root;
    inorder_r(node);
}
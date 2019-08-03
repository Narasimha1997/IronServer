#include<error.h>
#include<stdio.h>
#include<stdlib.h>

void throw_error(char * error_string) {
    fprintf(stderr, "%s\n", error_string);
    exit(0);
}

#!/bin/bash

INCLUDE_DIR='./include'
MODULES='./src/modules'


#compile + build source
gcc -c src/main.c -I $INCLUDE_DIR $MODULES/*.c
mkdir build
mv *.o build

#link sources
gcc -I $INCLUDE_DIR build/*.o -pg -o webc.out


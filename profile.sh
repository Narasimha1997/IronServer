#!/bin/bash

INCLUDE_DIR='./include'
MODULES='./src/modules'


#compile + build source
gcc -pg -c  src/test.c -I $INCLUDE_DIR $MODULES/*.c
mkdir build
mv *.o build

#link sources
gcc -pg -I  $INCLUDE_DIR build/*.o -pg -o profile.out

./profile.out

gprof profile.out | gprof2dot | dot -Tpng -o profile/output.png
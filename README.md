# IronServer
A simple, amazingly fast static web server written in C. Supports faster MIME type resolution and caching.

## What makes it faster ?
Firstly, it is written in C , since C is compiled with most intelligent GCC compiler, it is optimized and runs directly on the machine,
secondly, it uses a in-memory cache built using a Binary search tree. <strong>SDM</strong> is used a hashing function , this hash key is used
to lookup binary search tree that contains pointers to file data in memory. I/O operations are directly done on cache, in case of a cache miss
a disk I/O is scheduled and data is bought into the cache and then serve, this miss however can occur only once when the file gets requested for the first time.
Thirdly, MIME type resolution, I identified MIME type conversion has to happen every time , so instead of implementing it as O(n) I tought of creating a 
MIME table that is initialized upon server startup, this table has hash-index key and returns the HTTP Content-Type for the corresponding 
file type. In future, to make it more efficient, we consider caching preprocessed headers. We obtained the insights from call graph.

## Performance comparision : 
![Performance comparision : IronServer (Blue) vs npm serve (Orange)](https://raw.githubusercontent.com/Narasimha1997/IronServer/master/profile/Figure_1.png)

<strong> In Blue : IronServer , In Orange : npm serve

## Call Graph : 
Profiling is done using gprof , a profiling tool for GCC compiler. The call-graph obtained for 100 requests can be used to unlock performance insights

![Performance comparision : IronServer (Blue) vs npm serve (Orange)](https://raw.githubusercontent.com/Narasimha1997/IronServer/master/profile/output.png)

## How to run : 

1. Compile for your Linux platform, just run ./build.sh
2. Run webc.out binary, it will serve everything under static directory.


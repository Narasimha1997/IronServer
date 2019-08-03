#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>
#include <string.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <netdb.h>
#include <arpa/inet.h>
#include <time.h>
#include <sys/file.h>
#include <fcntl.h>
#include<net.h>
#include<error.h>
#include<request.h>

#define PORT "8888"
#define REQUEST_BUFFER_SIZE 64 * 1024

void http_handler(int fd) {
    char request[REQUEST_BUFFER_SIZE];

    int recvd_bytes_len = recv(fd, request, REQUEST_BUFFER_SIZE, 0);

    if(recvd_bytes_len < 0) throw_error("Did not receive anything\n");

    default_static_handler(request, fd);
}


int main(int argc, char const *argv[])
{
    //test Binary Search Tree
    create_mimetypes();
    int socket_fd;
    struct sockaddr_storage client_addr;

    //IPv6 support
    char IPv6[INET6_ADDRSTRLEN];

    int listen_fd = get_listener_socket(PORT);
    if(listen_fd < 0) throw_error("Failed to create socket, try another ports");

    printf("Web server started .....\n");

    while(1) {
        socklen_t sin_size = sizeof client_addr;
        socket_fd = accept(listen_fd, (struct sockaddr * )&client_addr, &sin_size);

        if(socket_fd < 0) throw_error("Clinet connection failed");
        inet_ntop(client_addr.ss_family,
            get_in_addr((struct sockaddr *)&client_addr),
            IPv6, sizeof IPv6);

        http_handler(socket_fd);
        close(socket_fd);
    }

    return 0;
}

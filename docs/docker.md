Dockerfile

Build:
docker build --tag *name* .

Run:
detach - In the background
docker run --detach --publish 3000:3000 --name *name of the container* *name of the app*

Stop:
A list of containers running on the machine. --all - All containers on the system whether they are stopped or started
docker ps --all

docker stop *name*


Remove:
docker rm *name*


Docker compose
https://docs.docker.com/compose/compose-file/compose-file-v3/

docker image ls - List local images
docker-compose down - Stop the application

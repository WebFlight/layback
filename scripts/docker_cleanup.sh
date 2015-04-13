#! /bin/bash

read -p "Are you sure? This will remove all your docker images and containers! (Y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]
then
	echo "Cleaning containers"
    docker stop $(docker ps -a -q)
	docker rm $(docker ps -a -q)
	docker rmi $(docker images -q)
else
	exit 1
fi

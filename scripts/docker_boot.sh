#! /bin/bash

if [[ $(docker images) != *layback* ]]; then
	docker build --tag="layback" ./
fi

ROOT_PATH=$(pwd)
docker run --rm -it -v $ROOT_PATH:/var/www layback
#! /bin/bash

if [[ $(docker images) != *sleeper* ]]; then
	docker build --tag="sleeper" ./
fi

ROOT_PATH=$(pwd)
docker run --rm -it -v $ROOT_PATH:/var/www sleeper
# sleeper
Sleeper is a command-line tool for validating API documentation written in Swagger format against its backend implementation.

# Docker

```shell
# Asuming your in the root dir first build the image:
docker build --tag="sleeper" ./

# Run the container
docker run --rm -it -v /path/to/sleeper:/var/www sleeper
```


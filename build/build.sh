#!/bin/sh

# Build docker images.
docker build --tag ${1@L} --label org.opencontainers.image.source=$2 ./node-red
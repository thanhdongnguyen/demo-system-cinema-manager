FROM node:13.1.0-alpine3.10

RUN mkdir /usr/src

RUN apk add bash vim git curl

RUN npm install -g nodemon

WORKDIR /usr/src/bootstrap
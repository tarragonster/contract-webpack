FROM node:12

WORKDIR /home/node/contract-webpack

VOLUME /home/node/contract-webpack

ADD . /home/node/contract-webpack

USER node

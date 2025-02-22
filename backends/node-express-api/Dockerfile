FROM node:23-bookworm

WORKDIR /home/node/app

COPY ./backends/node-express-api/package*.json ./

COPY ./backends/node-express-api/ .

RUN ["npm", "install"]

EXPOSE 5679
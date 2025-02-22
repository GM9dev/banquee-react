FROM node:23-bookworm

WORKDIR /home/node/app

COPY ./frontends/package*.json ./

COPY ./frontends/ .

RUN ["npm", "install"]

EXPOSE 5680
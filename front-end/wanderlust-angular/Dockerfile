FROM node:15.3.0-alpine3.10 AS build
WORKDIR /home/node/app
COPY . /home/node/app
RUN npm install
# building app
ENTRYPOINT ["npm", "run", "start:prod"]
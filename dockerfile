FROM node:latest

WORKDIR /usr/src

COPY package.json ./

RUN npm install

COPY . .

CMD [ "node", "index.ts" ]

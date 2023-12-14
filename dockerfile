FROM node:latest

#WORKDIR /usr/src
WORKDIR /app
COPY package.json /app/

RUN npm install

COPY . .

CMD [ "node", "index.ts" ]

EXPOSE 8081

# FROM node:17-alpine as build
FROM node:20.15.1-alpine as build
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
CMD ["npm", "run" , "dev" ]
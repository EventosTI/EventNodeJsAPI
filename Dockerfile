FROM node:10
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
EXPOSE 3333
RUN npm install -g nodemon
CMD [ "nodemon", "src/server.js" ]
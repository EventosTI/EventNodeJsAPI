FROM node:12
WORKDIR /app
COPY package.json package.json
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
COPY . .
EXPOSE 3333
RUN yarn install
RUN yarn global add nodemon
CMD [ "nodemon", "src/server.js" ]
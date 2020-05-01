const express = require('express');
const routes = require('./routes');
const http = require('http');
const cors = require('cors');

require('./config/database');

class App {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new App().server;
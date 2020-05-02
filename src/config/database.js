const mongoose = require('mongoose');

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.DB_HOST, {
      useNewUrlParser: true, useUnifiedTopology: true 
    }).then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(`Erro: ${err}`));
  }
}

module.exports = new Database();
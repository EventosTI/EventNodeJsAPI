const mongoose = require('mongoose');

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect('mongodb://evento:Arte1982@ds161493.mlab.com:61493/eventos', {
      useNewUrlParser: true, useUnifiedTopology: true 
    }).then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(`Erro: ${err}`));
  }
}

module.exports = new Database();
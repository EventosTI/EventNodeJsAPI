'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// conecta ao banco
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds161493.mlab.com:61493/eventos', {
    useNewUrlParse: true,
    useUnifiedTopology: true,
});

// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRoute);
app.use("/product", productRoute);

module.exports = app;

'use strict';

const express = require('express');
const router = express.Router();

/**
 * Metodo GET
 * Rota de Teste
 */
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

module.exports = router;
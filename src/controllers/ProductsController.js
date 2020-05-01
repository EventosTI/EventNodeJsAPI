'use strict';

class ProductsController {
    async create(req, res) {
        res.status(201).send(req.body);
    }

    async update(req, res) {
        const id = req.params.id;
        res.status(200).send({
            id: id,
            item: req.body
        });
    }

    async destroy(req, res) {
        res.status(200).send(req.body);
    }
}

module.exports = new ProductsController();

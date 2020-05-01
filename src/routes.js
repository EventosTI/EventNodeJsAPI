const { Router } = require('express');
const routes = new Router();

const ProductsController = require('./controllers/ProductsController');

routes.get('/', (_req, res) =>
  res.status(200).json({ title: "Node Store API", version: "0.0.1" })
);

routes.post("/", ProductsController.create);
routes.put("/:id", ProductsController.update);
routes.delete("/", ProductsController.destroy);

module.exports = routes;
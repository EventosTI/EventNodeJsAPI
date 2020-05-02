const { Router } = require('express');
const routes = new Router();

const EventsController = require('./controllers/EventsController');
const ProductsController = require('./controllers/ProductsController');

routes.get('/', (_req, res) =>
  res.status(200).send({ title: "Node Store API", version: "0.0.1" })
);

routes.post("/", ProductsController.create);
routes.put("/:id", ProductsController.update);
routes.delete("/", ProductsController.destroy);

// Events
routes.get("/events", EventsController.index);
routes.post("/events", EventsController.create);

module.exports = routes;
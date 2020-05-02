const { Router } = require('express');
const routes = new Router();

const EventsController = require('./controllers/EventsController');
const EventValidator = require('./validators/EventValidator');

routes.get('/', (_req, res) =>
  res.status(200).send({ title: "Node Store API", version: "0.0.1" })
);

// Events
routes.get("/events", EventsController.index);
routes.post("/events", EventValidator, EventsController.create);
routes.get("/events/:id", EventsController.show);
routes.put("/events/:id", EventValidator, EventsController.update);
routes.delete("/events/:id", EventsController.destroy);

module.exports = routes;
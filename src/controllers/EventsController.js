'use strict';

let yup = require('yup');

const Event = require('../schemas/Event');

class EventsController {
    async index(_req, res) {
      const events = await Event.find();

      res.status(200).json({ events });
    }

    async create(req, res) {
      let schema = yup.object().shape({
        name: yup.string().required(),
        date: yup.date().required(),
        address: yup.string(),
        organization: yup.string(),
        link_to_subscribe: yup.string()
          .url()
          .required(),
        description: yup.string().required()
      });

      schema.validate(req.body.event, { abortEarly: false }).catch(err => {
        return res.status(400).json({ error: err.errors });
      });
  
      const event = await Event.create(req.body.event);

      return res.status(201).json(event);
    }
}

module.exports = new EventsController();

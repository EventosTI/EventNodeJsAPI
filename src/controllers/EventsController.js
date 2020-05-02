'use strict';

let yup = require('yup');

const Event = require('../models/Event');

class EventsController {
    async index(_req, res) {
      const events = await Event.find();

      res.status(200).json({ events });
    }

    async create(req, res) {
      let schema = yup.object().shape({
        name: yup.string().required(),
        date: yup.date().required(),
        local: yup.string(),
        organizer: yup.string(),
        inscription_link: yup.string()
          .url()
          .required(),
        description: yup.string().required(),
        program: yup.array(),
        slug: yup.string().required(),
        tags: yup.array()
      });

      schema.validate(req.body, { abortEarly: false }).catch(err => {
        return res.status(400).json({ error: err.errors });
      });
  
      const event = await Event.create(req.body);

      return res.status(201).json(event);
    }
}

module.exports = new EventsController();

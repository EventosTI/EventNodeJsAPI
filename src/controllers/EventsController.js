'use strict';

let yup = require('yup');

const Event = require('../models/Event');

class EventsController {
  async index(_req, res) {
    const events = await Event.find();

    res.status(200).json({ events });
  }

  async create(req, res) {
    const event = await Event.create(req.body);

    return res.status(201).json(event);
  }

  async show(req, res) {
    const event = await Event.findById(req.params.id);

    return res.status(200).json(event);
  }
}

module.exports = new EventsController();

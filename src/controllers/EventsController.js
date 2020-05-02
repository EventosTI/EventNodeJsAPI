'use strict';

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

  async update(req, res) {
    await Event.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (errors, model) {
      if (errors) {
        return res.status(400).json(errors);
      } else {
        return res.status(200).json(model);
      }
    });
  }

  async destroy(req, res) {
    await Event.findByIdAndRemove(req.params.id)
    
    return res.status(204).json(null)
  }
}

module.exports = new EventsController();

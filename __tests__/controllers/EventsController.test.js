const request = require('supertest');
const faker = require('faker');

const Event = require('../../src/models/Event');
const eventParams = require('../factories/Event.factory.js');
const app = require('../../src/app');

describe("EventsController", () => {
  describe("Index ->", () => { 
    test('should 200 and return to many events', async () => {
      return request(app)
        .get("/events")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });

  describe("Create ->", () => {
    test('should 201 and return a event', async () => {
      return request(app)
        .post("/events")
        .send(eventParams)
        .set('Accept', 'application/json')
        .then(response => {
          expect(response.statusCode).toBe(201);
        });
    });

    test('should 400 and return errors', async () => {
      let invalidParams = { ...eventParams, name: '' }

      return request(app)
        .post("/events")
        .send(invalidParams)
        .set('Accept', 'application/json')
        .expect(400)
    });
  });
  
  describe("Show ->", () => { 
    test('should 200 and return a event', async () => {
      const event = await Event.create({ ...eventParams, name: faker.lorem.word() });

      return request(app)
        .get("/events/" + event._id)
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.body.name).toBe(event.name);
        });
    });
  });

  describe("Update ->", () => { 
    test('should 200 and return a event', async () => {
      const event = await Event.create({ ...eventParams, name: faker.lorem.word() });
      validUpdate = { ...eventParams, name: faker.lorem.word() }

      return request(app)
        .put("/events/" + event._id)
        .send(validUpdate)
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.body.name).toBe(validUpdate.name);
        });
    });

    test('should 400 and return errors', async () => {
      const event = await Event.create({ ...eventParams, name: faker.lorem.word() });
      invalidUpdate = { ...eventParams, name: null }

      return request(app)
        .put("/events/" + event._id)
        .send(invalidUpdate)
        .then(response => {
          expect(response.statusCode).toBe(400);
        });
    });
  });

  describe("Delete ->", () => { 
    test('should 204', async () => {
      const event = await Event.create({ 
        ...eventParams,
        name: faker.lorem.word(),
        organizer: faker.lorem.word()
      });

      return request(app)
        .delete("/events/" + event._id)
        .then(response => {
          expect(response.statusCode).toBe(204);
        });
    });
  });
});

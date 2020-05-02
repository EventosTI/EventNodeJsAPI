const Event = require('../../src/models/event');
const eventParams = require('../factories/event.faker');

describe('Event', () => {
    beforeAll(async () => {
      require('../../src/config/database');
    });

    it('create & save event successfully', async () => {
        const validEvent = new Event(eventParams);
        const savedEvent = await validEvent.save();

        expect(savedEvent._id).toBeDefined();
        expect(savedEvent.name).toBe(eventParams.name);
    });
})
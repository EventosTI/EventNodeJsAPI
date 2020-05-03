const faker = require('faker');
const speakerName = faker.name.firstName();

event = {
	name: faker.lorem.word(),
	date: faker.date.future(),
	local: faker.address.streetName(),
	organizer: faker.random.word(),
	inscription_link: faker.internet.url(),
	description: faker.lorem.paragraphs(),
	program: [
		{
			title_talk: speakerName,
			name_speaker: speakerName,
      description_talk: speakerName,
      slide_link: speakerName,
      video_link: speakerName,
      twitter_name: speakerName,
      github_name: speakerName
		}
	],
	tags: [faker.lorem.word(), faker.lorem.word()]
};

module.exports = event;

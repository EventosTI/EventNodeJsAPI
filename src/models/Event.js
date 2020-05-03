const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  local: String,
  organizer: String,
  inscription_link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  program: [{
      title_talk: String,
      name_speaker: String,
      description_talk: String,
      slide_link: String,
      video_link: String,
      twitter_name: String,
      github_name: String,
  }],
  slug: {
      type: String,
      trim: true,
      index: true,
      unique: true
  },
  tags: [{
      type: String,
      required: true
  }]
},{
  timestamps: true,
});

EventSchema.pre('save', async function(next) {
  this.slug = generateSlug(this.organizer, this.name)

  next();
});

function generateSlug(organizer, name) {
  return name + '-of-' + organizer
}

module.exports = mongoose.model('Events', EventSchema);

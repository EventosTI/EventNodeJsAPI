'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new mongoose.Schema({
    name: String,
    date_event: String,
    local: String,
    organizer: String,
    inscription_link: String,
    description: String,
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
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    tags: [{
        type: String,
        required: true
    }]
    
});

module.exports = mongoose.model('Event', EventSchema);
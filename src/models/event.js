'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    date_begin: {
        type: Date,
        required: true,
    },
    date_end: {
        type: Date,
        required: true,
    },  
    local: String,
    organizer: String,
    inscription_link: {
        type: String,
        required: true,
    }, String,
    image_event: String,
    description: {
        type: String,
        required: true,
    },
    program: [{
        title_talk: String,
        name_speaker: String,
        avatar_speaker: String,
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
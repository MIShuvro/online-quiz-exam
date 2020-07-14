const mongoose = require('mongoose')

const contentSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    slug: {
        type: String,
        trim: true
    },
    heading: {
        type: String,
        trim: true
    },
    picture: {
        type: String,
        trim: true
    },
    text: {
        type: String,
        trim: true
    },
    subText: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

const Content = mongoose.model('Content', contentSchema)
module.exports = Content
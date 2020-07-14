const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    questionLevel: {
        type: String,
        trim: true
    },
    slug: {
        type: String,
        trim: true
    },
    question: {
        type: String,
        trim: true
    },
    options: {
        type: [String],
        trim: true,

    },
    answer: {
        type: Number,
        trim: true,

    }

})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question
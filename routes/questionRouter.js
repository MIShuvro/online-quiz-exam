const Router = require('express').Router()

const {
    createQuestion,
    getQuestion
} = require('../controllers/questionController')

/**
 *  POST Request
 */

Router.post('/create-question', createQuestion)

/**
 * Get Request
 */
Router.get('/', getQuestion)

module.exports = Router
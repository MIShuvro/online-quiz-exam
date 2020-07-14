const Router = require('express').Router()

const {
    createContent,
    getContent,
    getSingleContent
} = require('../controllers/contentController')

/**
 *  Post Request
 */

Router.post('/create-content', createContent)

/**
 *  Get Request
 */
Router.get('/:slug', getContent)

Router.get('/view/:_id', getSingleContent)

module.exports = Router
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const validator = require('express-validator')
require('./db')

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(validator())
/**
 * Using Route
 */

app.use('/api/interactiveProtal', require('./routes/contentRouter'))

app.use('/api/interactiveProtal', require('./routes/questionRouter'))

app.listen(PORT, () => {
    console.log(`Server is running on port is ${PORT}`)
})
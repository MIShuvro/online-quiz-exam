const mongoose = require('mongoose')

mongoose.connect('DATABASE_URL', {

        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(response => {
        console.log(`Database connected`)
    })
    .catch(error => {
        console.log('Database disconnected')
    })
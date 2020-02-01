const express = require('express')
const app = express()
const morgan = require('morgan')

app.use( express.json() )
app.use( morgan('dev') )
app.use( express.urlencoded({extended:false}) )

process.env.DB_HOST = 'your host'
process.env.DB_USER = 'database user'
process.env.DB_PASS = 'your super secret pass'
process.env.SECRET  = 'the very super secret token to enforce encryption',
process.env.DATABASE  = 'yourdatabase'

app.use( require('./controllers/authController') )
app.use('/apps/', require('./controllers/Applications'))

module.exports = app
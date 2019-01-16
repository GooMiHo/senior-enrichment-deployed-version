const path = require('path')
const express = require('express')
const morgan = require('morgan')
const db = require('./db')
const PORT = process.env.PORT || 8080
const app = express()
module.exports = app

if (process.env.NODE_ENV !== 'production') require('../secrets')

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// auth and api routes
app.use('/api', require('./api'))

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

db.sync().then(() => {
  console.log('db synced')
  app.listen(PORT, () =>
    console.log(`studiously serving silly sounds on port ${PORT}`)
  )
})

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

const connectionString = require('../env')

// allows http and websocket connections
const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect(connectionString, {
    useNewUrlParser: true
})

app.use((req, res, next) => {
    req.io = io
    next()
})
app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))) // route to uploads folder
app.use(require('./routes'))

server.listen(3333)
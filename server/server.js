const express = require('express')
const path = require('path')
// insert route here
const videoRoutes = require('./routes/videos')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/videos', videoRoutes)

// This is the BrowserRouter config
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server


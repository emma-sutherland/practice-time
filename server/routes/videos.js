const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('../db/connection')

const router = express.Router()

// put routes here

router.get('/', (req, res) => {
  db.getVideos()
    .then((allVideos) => {
      console.log(allVideos)
      console.log("video Routes page")
      res.json(allVideos)
    })
    .catch((err) => res.status(500).json({ err: err.message }))
});

module.exports = router
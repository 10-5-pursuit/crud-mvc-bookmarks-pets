const express = require('express')
// Create an instance of our express Router that our server can use to route appropriately
const bookmarks = express.Router()

// Import the bookmarks model
const bookmarksArray = require('../models/bookmark')


// Index Routes: gets all of the bookmarks
// localhost:4001/bookmarks/
bookmarks.get('/', (req, res) => {
    res.json(bookmarksArray)
})



module.exports = bookmarks
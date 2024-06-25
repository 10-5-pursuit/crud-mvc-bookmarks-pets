const express = require('express')
// Create an instance of our express Router that our server can use to route appropriately
const bookmarks = express.Router()

// Import the bookmarks model
const bookmarksArray = require('../models/bookmark')


// Index Route: gets all of the bookmarks
// localhost:4001/bookmarks/
bookmarks.get('/', (req, res) => {
    res.json(bookmarksArray)
})

// SHOW Route: gets ONE of the bookmarks
// localhost:4001/bookmarks/0
bookmarks.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    if(bookmarksArray[arrayIndex]){
        res.status(200).json(bookmarksArray[arrayIndex])
    } else {
        res.status(404).json({ error: "Bookmark Not Found" })
    }
})

// POST Route: creates a new bookmark and adds it to our array
// Uses req.body to get information from the request to create a new bookmark
// localhost:4001/bookmarks/
bookmarks.post('/', (req, res) => {
    bookmarksArray.push(req.body)
    res.json(bookmarksArray[bookmarksArray.length - 1])
})

// DELETE Route: delete a bookmark from our bookmarks array
// localhost:4001/bookmarks/2
bookmarks.delete('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    if(bookmarksArray[arrayIndex]){
        const deletedBookmark = bookmarksArray.splice(arrayIndex, 1)
        res.json(deletedBookmark[0])
    } else {
        res.json({ error: "Bookmark Not Found" })
    }
})

// PUT Route (update) will update a specific bookmark in our bookmark array to be the body of the request
// localhost:4001/bookmarks/2
bookmarks.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    bookmarksArray[arrayIndex] = req.body
    res.status(200).json(bookmarksArray[arrayIndex])
})



module.exports = bookmarks
const express = require('express')
const pets = express.Router()
const petsArray = require('../models/pet')


// localhost:4001/pets/
pets.get('/', (req, res) => {
    res.json(petsArray)
})


module.exports = pets
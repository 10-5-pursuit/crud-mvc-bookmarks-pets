const express = require('express')
const pets = express.Router()
const petsArray = require('../models/pet')


// localhost:4001/pets/
pets.get('/', (req, res) => {
    res.json(petsArray)
})

// Show route for pets
pets.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    if(petsArray[arrayIndex]){
        res.status(200).json(petsArray[arrayIndex])
    } else {
        res.status(404).json({ error: "Pet Not Found" })
    }
})

// POST a new pet
// localhost:4001/pets
pets.post('/', (req, res) => {
    petsArray.push(req.body)
    res.status(201).json(petsArray[petsArray.length - 1])
})


module.exports = pets
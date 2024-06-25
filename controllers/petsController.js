const express = require('express')
const pets = express.Router()
const petsArray = require('../models/pet')
const { checkForNameKey } = require('../validations/petValidations')


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
pets.post('/', checkForNameKey, (req, res) => {
    petsArray.push(req.body)
    res.status(201).json(petsArray[petsArray.length - 1])
})


// DELETE a pet
// localhost:4001/pets/0
pets.delete('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    if(petsArray[arrayIndex]){
        petsArray.splice(arrayIndex, 1)
        res.json({ message: "Successfully adopted a pet" })
    } else {
        res.json({ error: "Pet Not Found"})
    }
})

// PUT Route: UPDATE a pet
// localhost:4001/pets/1
pets.put('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    petsArray[arrayIndex] = req.body
    res.status(200).json(petsArray[arrayIndex])
})


module.exports = pets
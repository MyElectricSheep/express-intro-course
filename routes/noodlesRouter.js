const express = require('express')

const noodlesRouter = express.Router()

const flavours = [
    {id: 1, name: "chicken", country: 'multiple'},
    {id: 2, name: "miso", country: 'japan'},
    {id: 3, name: "kimchi", country: 'korea'},
    {id: 4, name: "pho", country: 'vietnam'},
]

// Edit a specific resource on the server
noodlesRouter.put('/:id', (req, res) => {
    const flavour = flavours.find(noodle => noodle.id === parseInt(req.params.id, 10))

    if (!flavour) return res.status(404).send('No such flavour')

    flavour.name = req.body.name

    res.status(200).send(flavour);
})

// Delete a resource on the server
noodlesRouter.delete('/:id', (req, res) => {
    const flavour = flavours.find(noodle => noodle.id === parseInt(req.params.id, 10))
    
    if (!flavour) return res.status(404).send('No such flavour')

    const index = flavours.indexOf(flavour)
    flavours.splice(index, 1)

    res.status(200).send(flavour)
})

// Create a resource on the server
noodlesRouter.post('/', (req, res) => {
    // console.log(req.body)
    const newFlavour = {
        id: flavours.length + 1,
        name: req.body.name,
        country: req.body.country
    }
    flavours.push(newFlavour)
    res.status(201).send(newFlavour)
})

// GET one specific flavour route
noodlesRouter.get('/:id', (req, res) => {
    const flavour = flavours.find(noodle => noodle.id === parseInt(req.params.id, 10))
    if (flavour) {
        res.send(flavour)
    } else {
        res.status(404).send('We do not have that flavour in stock')
    }
})

// GET all flavours route
noodlesRouter.get('/', (req, res) => {
    // console.log(req.query)
    if (req.query.country) {
        const filteredFlavours = flavours.filter(noodle => noodle.country === req.query.country)
        res.send(filteredFlavours)
    } else {
        res.send(flavours)
    }
})

module.exports = noodlesRouter
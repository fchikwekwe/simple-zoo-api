const express = require('express')

const app = express()

const zoos = {
    'Zoolander': {
        animals:
            [
                {
                    name: 'Geoffrey',
                    species: 'giraffe'
                },
                {
                    name: 'Boyo',
                    species: 'badger'
                }
            ],
        location: 'San Francisco'
    },
    'Meet the parents': {
        animals:
            [
                {
                    name: 'Zeus',
                    species: 'zebra'
                },
                {
                    name: 'Barbara',
                    species: 'beaver'
                }
            ],
        location: 'San Francisco'
    }
}

app.get('/zoos', (req, res) => {
    res.json(zoos);
})

app.get('/zoos/:name', (req, res) => {
    res.json(zoos[req.params.name])
})

app.listen(3000, () => {
    console.log("Express server listening on port 3000");
});

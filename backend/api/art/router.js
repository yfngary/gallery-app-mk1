const router = require('express').Router();
const Art = require('./model');

router.get('/', (req, res, next) => {
    Art.getAll()
        .then(art => {
            const artGallery = art.map((a) => {
                return {...a}
            })
            res.status(200).json(artGallery)
        })
        .catch(next);
});

router.post('/', async (req, res, next) => {
    Art.create(req.body)
        .then(art => {
            const newArt = {
                ...art
            }
            res.status(201).json(newArt)
        })
        .catch(next)
})

module.exports = router

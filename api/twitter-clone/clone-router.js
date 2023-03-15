const router = require("express").Router();


router.get('/', (req, res, next) => {
    res.status(200).json({ message: "Twitter-clone is working" })
})


router.get('/:id', (req, res, next) => {
    res.status(200).json({ message: `${req.params.id} comments is running` })
})

router.post('/:id', (req, res, next) => {
    res.status(200).json({ message: `${req.params.id} with id comments` })
})


router.put('/:id', (req, res, next) => {
    res.status(200).json({ message: `${req.params.id} new comments update is working` })
})


router.delete('/', (req, res, next) => {
    res.status(200).json({ message: "new comments delete is working" })
})


module.exports = router;
const router = require("express").Router();
//işletmenin yapacağı işlemler
router.get('/', (req, res, next) => {
    res.status(200).json({ message: "Users is working" })
})
// router.get('/', (req, res, next) => {
//     res.status(200).json({ message: "Twitter-clone is working" })
// })
// router.post("/", (req, res, next) => {
//     res.status(200).json({ message: "new comments is working" })
// })

//user işlemleri
router.put("/:id", (req, res, next) => {
    res.status(200).json({ message: `${req.params.id} id'li user` })
})
//işletme
router.delete("/", (req, res, next) => {
    res.status(200).json({ message: "users delete is working" })
})


module.exports = router;
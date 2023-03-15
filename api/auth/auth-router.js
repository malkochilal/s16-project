const router = require("express").Router();


router.get('/', (req, res, next) => {
    res.status(200).json({ message: "Auth version is working" })
})

router.post('/register', (req, res, next) => {
    res.status(200).json({ message: "Register is working" })
})

router.post("/login", (req, res, next) => {
    res.status(200).json({ message: "Login is working" })
})
// router.post("/logout", (req, res, next) => {
//     res.status(200).json({ message: "Logout is working" })
// })


module.exports = router;
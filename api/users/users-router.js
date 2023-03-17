const router = require("express").Router();
const usersModel = require("./users-model");
const usersMd = require("./users-middleware");

router.get("/", async (req, res, next) => {
    try {
        const users = await usersModel.getAll();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", usersMd.userIdValid, async (req, res, next) => {
    try {
        const user = await usersModel.getById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});
module.exports = router;




// router.get('/', (req, res, next) => {
//     res.status(200).json({ message: "Twitter-clone is working" })
// })
// router.post("/", (req, res, next) => {
//     res.status(200).json({ message: "new comments is working" })
// })




//user işlemleri
// router.put("/:id", (req, res, next) => {
//     res.status(200).json({ message: `${req.params.id} id'li user` })
// })
// //işletme
// router.delete("/", (req, res, next) => {
//     res.status(200).json({ message: "users delete is working" })
// })
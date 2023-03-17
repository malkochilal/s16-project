const router = require("express").Router();
const fModel = require("./follows-model");
// const fMd = require("./follows-model");


router.get("/", async (req, res, next) => {
    try {
        const follows = await fModel.getAll(); //modelden fonksiyonları alıyoruz.
        res.status(200).json(follows);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const follow = await fModel.getById(req.params.id);
        res.status(200).json(follow);

    } catch (error) {
        next(error);
    }
});
router.post("/", async (req, res, next) => {

    try {
        const follow = await fModel.add(req.body);
        res.status(201).json(follow);

    } catch (error) {
        next(error);
    }

});
router.delete("/:id", async (req, res, next) => {
    try {
        const deletedF = await fModel.remove(req.params.id);
        res.status(201).json(deletedF);
    } catch (error) {
        next(error);
    }
});
module.exports = router;
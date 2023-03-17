const router = require("express").Router();
const likesModel = require("./likes-model");
const lMd = require("./likes-middleware");


router.get("/", async (req, res, next) => {
    try {
        const likes = await likesModel.getAll(); //modelden fonksiyonları alıyoruz.
        res.status(200).json(likes);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", lMd.likeExists, async (req, res, next) => {
    try {
        const like = await likesModel.getById(req.params.id);
        res.status(200).json(like);

    } catch (error) {
        next(error);
    }
});
router.post("/", async (req, res, next) => {

    try {
        const like = await likesModel.add(req.body);
        res.status(201).json(like);

    } catch (error) {
        next(error);
    }

});
router.delete("/:id", lMd.likeExists, async (req, res, next) => {
    try {
        const deletedL = await likesModel.remove(req.params.id);
        res.status(201).json(deletedL);
    } catch (error) {
        next(error);
    }
})
module.exports = router;
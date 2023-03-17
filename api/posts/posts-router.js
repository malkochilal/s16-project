const router = require("express").Router();
const pModel = require("./posts-model");
const pMd = require("./posts-middleware");


router.get("/", async (req, res, next) => {
    try {
        const posts = await pModel.getAll(); //modelden fonksiyonları alıyoruz.
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", pMd.postIdExists, async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await pModel.getById(id);
        res.status(200).json(post);

    } catch (error) {
        next(error);
    }
});
router.post("/", pMd.contentValid, async (req, res, next) => {

    try {
        const post = await pModel.add(req.body);
        res.status(201).json(post);

    } catch (error) {
        next(error);
    }

});
router.put("/:id",
    pMd.postIdExists,
    pMd.contentValid,
    async (req, res, next) => {
        try {
            await pModel.update(req.params.id, req.body);
            const updated = await pModel.getById(req.params.id);
            res.status(201).json(updated);
        } catch (error) {
            next(error);
        }
    });
router.delete("/:id", pMd.postIdExists, async (req, res, next) => {
    try {
        const deletedPost = await pModel.remove(req.params.id);
        res.status(201).json(deletedPost);
    } catch (error) {
        next(error);
    }
})
module.exports = router;
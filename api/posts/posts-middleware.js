const postsModel = require("./posts-model");

const contentValid = (req, res, next) => {
    const { title, content, location } = req.body;
    if (!title || !content || !location || title.length > 54 || content.length > 300) {
        res.status(400).json({ message: "Required fields are empty" });
    } else {
        next();
    }
};

const postIdExists = async (req, res, next) => {
    try {
        const result = await postsModel.getById(req.params.id);
        if (!result) {
            res
                .status(400)
                .json({ message: "there is no post matching your criteria" });
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { contentValid, postIdExists };
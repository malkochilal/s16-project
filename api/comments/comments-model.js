const db = require("../../data/db-config");


async function getAll() {
    const comments = await db("comments")
        .leftJoin("users", "user.user_id", "comments.user_id")
        .leftJoin("posts", "posts.posts_id", "comments.post_id")
        .select("comments.*", "users.*", "posts.post_id");
    return comments;
}

async function getBy(filter) {
    const result = await db("comments")
        .where(filter)
        .first();  //object
    return result;

}
async function getById(comment_id) {
    const result = await db("comments")
        .where("comment_id", comment_id)
        .first();
    return result;
}
async function add(comment) {
    const commentIdArray = await db("comments").insert(comment);
    const commentId = commentIdArray[0];
    const result = await db("comments")
        .where("comment_id", commentId)
        .first();
    return result;
}
// async function update(post_id, changes) {
//     return db("posts").where("post_id", post_id).update(changes);
// }
// async function remove(post_id) {
//     return db("posts").where("post_id", post_id).del();
// }
module.exports = {
    getAll,
    getBy,
    add,
    getById


};
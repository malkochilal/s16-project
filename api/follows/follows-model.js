const db = require("../../data/db-config");


async function getAll() {
    const follows = await db("follows")
        .leftJoin("users", "user.user_id", "follows.follower_id");
    // .select("posts.*", "users.*", "posts.post_id");
    return follows;
}

// // async function getBy(filter) {
// //     const result = await db("comments")
// //         .where(filter)
// //         .first();  //object
// //     return result;

// }
async function getById(follow_id) {
    const result = await db("follows")
        .where("follow_id", follow_id)
        .first();
    return result;
}
async function add(follow) {
    const followIdArray = await db("follows").insert(follow);
    const followId = followIdArray[0];
    const newFollow = await db("follows")
        .where("follow_id", followId)
        .first();
    return newFollow;
}
// async function update(post_id, changes) {
//     return db("posts").where("post_id", post_id).update(changes);
// }
async function remove(follow_id) {
    return db("follows").where("follow_id", follow_id).del();
}
module.exports = {
    getAll,
    add,
    getById,
    remove


};
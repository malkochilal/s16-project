const db = require("../../data/db-config");

async function getAll() {
    const users = await db("users");
    return users;
}

async function getBy(filter) {
    const result = await db("users")
        .where(filter)
        .first();  //object
    return result;

}

async function geyById(user_id) {
    const user = await db("users")
        .where("user_id", user_id)
        .first();
    return user;
}
async function add(user) {
    const userIdArray = await db("users").insert(user);
    const userId = userIdArray[0];
    const newUser = await db("users").where("user_id", userId).first();
    return newUser;
}
// async function updateById(user) {

//     await db("users").where("user_id", user_id).update(user)
//     return getById(user_id)
// }
// async function deleteById(user_id) {
//     await db("users").where("user_id", user_id).delete();
// }

module.exports = {
    getAll,
    getBy,
    geyById,
    add,
    // deleteById,
    // updateById,


};
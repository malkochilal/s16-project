// const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = require("../../config/index");
const usersModel = require("../users/users-model");

//username olup olmadığını kontrol et
const userNameValid = (req, res, next) => {
    const { username } = req.body;
    if (!username) {
        res
            .status(400)
            .json({ message: "Username and password are required for this field" });
    } else {
        next();
    }
};
//password var mı?
const passwordValid = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        res.status(400)
            .json({ message: "password is required for this field" });
    } else {
        next();
    }
};
const emailValid = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        res.status(400).json({ message: "email is required for this field" })
    } else {
        next();
    }
};
const locationValid = (req, res, next) => {
    const { location } = req.body;
    if (!location) {
        res.status(400).json({ message: "location is required for this field" })
    } else {
        next();
    }
};
const dateValid = (req, res, next) => {
    const { signup_date } = req.body;
    if (!signup_date) {
        res.status(400).json({ message: "signup date is required" })
    } else {
        next();
    }
};
//username daha önce kayıt olmuş mu?
const userNameTaken = async (req, res, next) => {
    const { username } = req.body;
    const usernameUni = await usersModel.getBy({ username });
    if (usernameUni) {
        res.status(400).json({ message: "The username is already taken" })
    } else {
        next();
    }
};
//username daha önce login olmuş mu?
const userNameExists = async (req, res, next) => {
    const { username } = req.body;
    const userValid = await usersModel.getBy({ username });
    if (!userValid) {
        res.status(400).json({ message: "Invalid" })
    } else {
        next();
    }
};


// const restricted = (req, res, next) => {
//     const token = req.headers.authorization;

//     if (token) { //token var
//         jwt.verify(token, JWT_SECRET, (err, tokenPayload) => {
//             if (err) { //token var ama geçerli değil
//                 next({ status: 401, message: "Token not valid" })


//             } else { //token var ve geçerli userInfo aslında optional
//                 req.userInfo = tokenPayload;
//                 next();

//             }
//         })

//     } else { //token yoksa
//         next({ status: 401, message: "Token not found" })
//     }

// }

// const protected = (req, res, next) => {
//     next()
// }

module.exports = {
    userNameExists,
    userNameTaken,
    dateValid,
    locationValid,
    emailValid,
    passwordValid,
    userNameValid,


};
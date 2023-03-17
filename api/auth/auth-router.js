const router = require("express").Router();
const { JWT_SECRET } = require("../../config/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const usersModel = require("../users/users-model");
const secrets = require("../secrets/index");
const authMd = require("./auth-middleware");




router.post(
    "/register",
    authMd.userNameValid,
    authMd.passwordValid,
    authMd.emailValid,
    authMd.locationValid,
    authMd.dateValid,
    authMd.userNameTaken,
    async (req, res, next) => {
        try {
            const credentials = req.body;
            const hash = bcrypt.hashSync(credentials.password, 8);
            credentials.password = hash;
            const newUser = await usersModel.add(credentials);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
);

router.post(
    "/login",
    authMd.userNameValid,
    authMd.passwordValid,
    authMd.userNameExists,
    async (req, res, next) => {
        const { username, password } = req.body;

        usersModel
            .getBy({ username })
            .then((user) => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    const token = generateToken(user);
                    req.session.user = user;
                    res.status(200).json({ user, token });
                } else {
                    res.status(401).json({ message: "Invalid credentials" });
                }
            })
            .catch(next);
    }
);

function generateToken(user) {
    const payload = {
        user_id: user.user_id,
        username: user.username,
    };
    const options = {
        expiresIn: "1d",
    };
    const token = jwt.sign(payload, secrets.JWT_SECRET, options);
    return token;
}
module.exports = router;

// router.get('/', (req, res, next) => {
//     res.status(200).json({ message: "Auth version is working" })
// })

// router.post('/register', (req, res, next) => {
//     res.status(200).json({ message: "Register is working" })
// })

// router.post("/login", (req, res, next) => {
//     //kullancının db'sini al
//     const user = { user_id: 1, role: "user" };
//     //password kontrolü
//     //generate token
//     const token = generateToken(user);
//     //return token
//     res.status(200).json({ message: "Login is working", token })
// })
// // router.post("/logout", (req, res, next) => {
// //     res.status(200).json({ message: "Logout is working" })
// // })

// function generateToken(user) {
//     const payload = { id: user.user_id, role: user.role }
//     const options = { expiresIn: "1h" };
//     const token = jwt.sign(payload, JWT_SECRET, options);
//     return token;
// }

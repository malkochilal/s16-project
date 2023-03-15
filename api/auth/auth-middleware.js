const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/index");

const restricted = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) { //token var
        jwt.verify(token, JWT_SECRET, (err, tokenPayload) => {
            if (err) { //token var ama geçerli değil
                next({ status: 401, message: "Token not valid" })


            } else { //token var ve geçerli userInfo aslında optional
                req.userInfo = tokenPayload;
                next();

            }
        })

    } else { //token yoksa
        next({ status: 401, message: "Token not found" })
    }

}

const protected = (req, res, next) => {
    next()
}

module.exports = {
    restricted,
    protected
} 
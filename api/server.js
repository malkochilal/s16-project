const express = require("express");
const server = express();
const authRouter = require("./auth/auth-router");
const usersRouter = require("./users/users-router");
const cloneRouter = require("./twitter-clone/clone-router");


const md = require("./auth/auth-middleware");

server.use('/api/auth', authRouter);
server.use('/api/users', md.restricted, usersRouter);
server.use('/api/twitter-clone', md.restricted, cloneRouter);





// server.use('*', (req, res) => {
//     res.status(404).json({ message: "not found" })
// })




module.exports = server; 
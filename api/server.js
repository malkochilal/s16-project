const express = require("express");
const server = express();
const authRouter = require("./auth/auth-router");
const usersRouter = require("./users/users-router");
const cloneRouter = require("./twitter-clone/clone-router");

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/twitter-clone', cloneRouter);





server.use('*', (req, res) => {
    res.status(404).json({ message: "not found" })
})




module.exports = server; 
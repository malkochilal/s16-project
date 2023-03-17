const server = require("./api/server");
const PORT = process.env.PORT || 9001;
// const { PORT } = require("./config");

server.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor... `)
})
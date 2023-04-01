const express = require("express");
const PORT = 3001;
const router = require("./routes")
const morgan = require("morgan")
const cors = require("cors");

const server = express();
server.use(express.json())
server.use(morgan("dev"))
server.use(cors());
server.use("/", router)

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})


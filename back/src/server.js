const express = require("express");
const router = require("./routes")
const morgan = require("morgan")
const cors = require("cors");
const { conn } = require('./DB_connection');
const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://rick-and-morty-livid-gamma.vercel.app');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use("/", router);

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`%s listening at`, process.env.PORT); // eslint-disable-line no-console
  });
});
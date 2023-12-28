const express = require("express");
const dotenv = require("dotenv");
require("./db/conn");
const MensRanking = require("../src/models/mens")
const router = require("../src/routers/menroute")

const app = express();
dotenv.config();
app.use(express.json())
const port = process.env.PORT || 8200;

app.use(router)

app.get('/', async (req, res) => {
    res.status(200).send("Hello from the Malahim Haseeb");
});

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}/`);
});

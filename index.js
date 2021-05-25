const express = require("express");
const cors = require('cors');
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/palyers", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`API ONLINE http://localhost:${port}`);
});
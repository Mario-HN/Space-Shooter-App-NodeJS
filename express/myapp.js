const express = require("express");
const logger = require("morgan");
const app = express();
const PORT = 3000;

app.use(logger("short"));

app.use((req, res) => {
    res.end("Hello World");
});

app.listen(3000);

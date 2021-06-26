const express = require("express");
const app = express();

var dbConnection = require('./db');

app.get("/", (req, res) => {

    res.send('App.Get from the Backend!');

});

const port = 5000;

app.listen(port, () => console.log(`Node JS Server Started Succesfully!`));
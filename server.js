const express = require("express");
const app = express();
const port = 5000;

var dbConnection = require('./db');
var productsRoute = require('./routes/productsRoute');

app.use('/api/products', productsRoute);

app.get("/", (req, res) => {
    res.send('App.Get from the backend is Working!');
});

app.listen(port, () => console.log(`Node.js Server Started Succesfully!`));
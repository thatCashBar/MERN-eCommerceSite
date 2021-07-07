const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

var dbConnection = require('./db');
var productsRoute = require('./routes/productsRoute');
var userRoute = require('./routes/userRoute');

app.use(bodyParser.json());

app.use('/api/products', productsRoute);
app.use('/api/users/', userRoute);

app.get("/", (req, res) => {
    res.send('App.Get from the backend is Working!');
});

app.listen(port, () => console.log(`Node.js Server Started Succesfully!`));
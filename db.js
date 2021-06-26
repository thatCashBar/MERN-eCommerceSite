const mongoose = require("mongoose");

var mongoDbUrl = 'mongodb+srv://Jaxon:jaxon@cluster0.qypdd.mongodb.net/eCommerce-Store';

mongoose.connect(mongoDbUrl, {useUnifiedTopology: true, useNewUrlParser: true});

var dbConnect = mongoose.connection;

dbConnect.on('error', ()=> {
    console.log(`MonogDb Connection Failed.`);
});

dbConnect.on('connected', ()=> {
    console.log(`MonogDb Connection Successful!`);
});

module.exports = mongoose;
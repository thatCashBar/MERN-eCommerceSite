const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/getallproducts', (req, res) => {
    Product.find({}, (error, result) => {
        if (!error) {
            return res.send(result);
        }
        else {
            return res.status(400).json({ message: 'Something went wrong!' });
        }
    })
});

router.post('/getproductbyid', (req, res) => {
    Product.find({_id: req.body.productid}, (error, result) => {
        if (!error) {
            return res.send(result[0]);
        }
        else {
            return res.status(400).json({ message: 'Something went wrong!' });
        }
    })
});

module.exports = router;
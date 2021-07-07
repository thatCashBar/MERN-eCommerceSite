const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");


router.post('/register', (req, res) => {

    User.find({ email: req.body.email }, (error, docs) => {
        if (docs.length > 0) {
            return res.status(400).json({ message: 'Something went wrong' });
        }
        else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            newUser.save(err => {
                if (!err) {
                    res.send('User Registration Success');
                }
                else {
                    res.send('Something went wrong');
                }
            });
        }

        if (error) {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    });

});

router.post('/login', (req, res) => {

    User.find({ email: req.body.email, password: req.body.password }, (error, docs) => {
        if (docs.length > 0) {
            res.send('Login Success');
        }
        else {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
    })

});

module.exports = router;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//Config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Secutity configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept,Content-Type,X-Requested-with,Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,DELETE,PATCH,PUT"
    );
    next();
});


module.exports = app;
const express = require('express')
const app = express();

function logger(req, res, next) {
    const timeOf = new Date();
    console.log(req.method);
    console.log(req.originalUrl);
    console.log(timeOf)
    next()
}


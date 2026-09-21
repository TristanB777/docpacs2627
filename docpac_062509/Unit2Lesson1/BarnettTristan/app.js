require('dotenv').config()
const PORT = Number(process.env.PORT);
const {parse} = require('querystring');
const express = require('express')
const app = express();
app.get("/", (request, response) => {
    return 'hello world';
})


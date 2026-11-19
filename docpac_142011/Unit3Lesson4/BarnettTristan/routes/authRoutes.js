const {findByName, findByEmail, findById, create} = require('../models/userModel.js')
const express = require("express");
const authRoute = express.Router()
authRoute.get(`/register`, (req, res) => {
    res.render('register', {
        title: "sign up",
    });
})

authRoute.post(`/register`, (req, res) => {
    var username = req.body.username
    var email = req.body.email
    var password = req.body.password
    var passwordCon = req.body.passwordCon
    if(password !== passwordCon) {
        res.render('register', {title: 'both passwords have to match'});
    }
    create.run(username, email, password)
    res.redirect(`/login`)
})

authRoute.get(`/login`, (req, res) => {

})

authRoute.post(`/login`, (req, res) => {
    
})

authRoute.get('/account', (req, res) => {

})

module.exports = {authRoute}
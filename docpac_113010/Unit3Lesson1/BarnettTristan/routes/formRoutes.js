const express = require("express");
const formRoute = express.Router()
const {insert} =  require('../models/entryModel.js');
formRoute.get('/form', (req, res) => {
    res.render('form', {
        title: "stupid form thing",
        navs: [{ 'href': '/', 'text': "home" }, { "href": '/form', "text": 'form' }]
    });
})

formRoute.post("/form", (req, res) => {
    console.log(req.body);
    if (req.body != '') {
        var data ={
            value:req.body.studentName,
            name:req.body.studentName.name,
            time: Date
        }
        res.render('formRes', {
            title: `your name is ${req.body.studentName}`,
            navs: [{ 'href': '/', 'text': "home" },
            { "href": '/form', "text": 'form' }]
        })
    }
    else {
        res.status(400).render({
            title: 'error',
            message: "missing answers",
            code: res.statusCode,
            href: '/form',
            navs: [{ 'href': '/', 'text': "home" },
                { "href": '/form', "text": 'form' }]
        })
    }

})

module.exports = { formRoute }
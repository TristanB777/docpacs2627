const {findByName, findByEmail, findById, create} = require('../models/userModel.js')
const formRoute = express.Router()
authRoute.get(`/register`, (req, res) => {
    res.render('register', {
        title: "sign up",
    });
})

authRoute.post(`/register`, (req, res) => {
    var password = document.getElementById('password');
    var passwordCon = document.getElementById('passwordCon');
    function vaildatePassword(){
        if(password.value != passwordCon.value) {
            passwordCon.setCustomValidity("Passwords Don't Match");
        }
        else {
            passwordCon.setCustomValidity('');
        }
    }
    password.onchange = vaildatePassword;
    passwordCon.onkeyup = vaildatePassword;
})

authRoute.get(`/login`, (req, res) => {

})

authRoute.post(`/login`, (req, res) => {
    
})

authRoute.get('/account', (req, res) => {

})

module.exports = {authRoute}
const Database = require('better-sqlite3');
const {db} =  require('../models/database.js');
const fieldAddtion = `ALTER TABLE users ADD COLUMN password;
                      ALTER TABLE users ADD COLUMN username TEXT;`


module.exports = {fieldAddtion}
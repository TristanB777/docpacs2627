const Database = require('better-sqlite3');
const {db} =  require('../models/database.js');

const what = `CREATE TABLE IF NOT EXISTS entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name INTEGER NOT NULL,
    value TEXT NOT NULL,
    time DATE NOT NULL);`

db.exec(what);
console.log('should have a database');

db.close();
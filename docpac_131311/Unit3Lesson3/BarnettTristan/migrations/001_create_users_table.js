const Database = require('better-sqlite3');
const {db} =  require('../models/database.js');

const what = `CREATE TABLE IF NOT EXISTS schema_migrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    time DATETIME DEFAULT CURRENT_TIMESTAMP);`

db.exec(what);
console.log('should have a database');

db.close();
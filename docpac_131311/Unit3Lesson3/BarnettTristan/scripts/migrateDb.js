const Database = require('better-sqlite3');
const {db3} =  require('../models/database.js');

const what = `CREATE TABLE IF NOT EXISTS schema_migrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    updated_schema TEXT NOT NULL,
    name TEXT NOT NULL UNIQUE,
    time DATETIME DEFAULT CURRENT_TIMESTAMP);`

db3.exec(what);

console.log('should have a the MigrationDb');

db3.close();
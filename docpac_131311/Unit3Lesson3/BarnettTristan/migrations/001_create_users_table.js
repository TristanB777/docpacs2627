const Database = require('better-sqlite3');
const {db, db3} =  require('../models/database.js');

const what = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    value TEXT,
    time DATETIME DEFAULT CURRENT_TIMESTAMP);`

db.exec(what);

console.log('should have a database');

const insertMigrate = db3.prepare(`INSERT INTO schema_migrations (updated_schema, name, time) VALUES (?,?,?)`)
date = new Date
date = String(date)
insertMigrate.run(users, 'addFields', date)

db.close();
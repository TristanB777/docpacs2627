const Database = require('better-sqlite3');
const {db} =  require('../models/database.js');

const insert = db.prepare (`INSERT INTO entries (value, source, time) VALUES (?,?,?)`)
const insertMany = db.transaction((things) => {
for (const thing in things) insert.run(thing.name, thing.value)})

const Database = require('better-sqlite3');
const {db, db3} =  require('../models/database.js');
const fieldAddtion = `ALTER TABLE entries ADD COLUMN password;
                      ALTER TABLE entries ADD COLUMN username TEXT;`

const insertMigrate = db3.prepare(`INSERT INTO schema_migrations (updated_schema, name, time) VALUES (?,?,?)`)

db.exec(fieldAddtion)

date = new Date
date = String(date)
insertMigrate.run(users, 'addFields', date)

db.close()


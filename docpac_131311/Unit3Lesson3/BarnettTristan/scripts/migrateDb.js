const Database = require('better-sqlite3');
import { migrate } from '@blackglory/better-sqlite3-migrations';
const {db3} =  require('../models/database.js');
const {user} = require('../migrations/001_create_users_table.js')
const {fieldAddtion} = require('../migrations/002_add_user_profile_fields.js')

db3.pragma('journal_mode=WAL')

    db3.exec(`CREATE TABLE IF NOT EXISTS migrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fileName TEXT NOT NULL UNIQUE,
    time DATETIME DEFAULT CURRENT_TIMESTAMP);`);

const migrations = [
    {
        version: 1,
        up: (database) => {try{db3.exec({user})} catch (error){console.log('failed to create users database')
        }},
        down: `DROP TABLE users;`
    },
    {
        version: 2,
        up: (database) => {try{db3.exec({fieldAddtion})} catch (error){console.log('failed to create users database')
        }},
        down: `ALTER TABLE users DROP COLUMN password,
               ALTER TABLE users DROP COLUMN username;`
    }
];

migrate(db3, migrations);

console.log('should have a the MigrationDb');

db3.close();
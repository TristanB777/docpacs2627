module.exports = {
    name: 'updateUsersTable',
    up: (db) => { 
    db.exec(`ALTER TABLE users ADD COLUMN username TEXT UNIQUE,
             ALTER TABLE users ADD COLUMN password TEXT;`);
    }
}
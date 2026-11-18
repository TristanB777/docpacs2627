module.exports = {
    name: 'createUsersTable',
    up: (db) => { 
    db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    username TEXT UNIQUE,
    password TEXT,
    time DATETIME DEFAULT CURRENT_TIMESTAMP);`);
    }
}


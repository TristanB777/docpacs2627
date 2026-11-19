const { db } = require("./database");

    // find user by username
    function findByName(userName) {
        const userFind = db.prepare(`SELECT * FROM users WHERE username = ?`);
        const user = userFind(userName);
        return user;
    }
    // find by email
    function findByEmail(userEmail) {
        const userFind = db.prepare(`SELECT * FROM users WHERE email = ?`);
        const user = userFind(userName);
        return user;
    }
    // find by ID
    function findById(userId) {
        const userFind = db.prepare(`SELECT * FROM users WHERE id = ?`);
        const user = userFind(userName);
        return user;
    }
    // create user
    const create = db.prepare(`INSERT INTO users (userName, Email, password) VALUES (?,?,?)`)


module.exports = {findByName, findByEmail, findById, create}

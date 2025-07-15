const Database = require('better-sqlite3');
const { DBPATH } = require('../constants');

const initializeDatabase = () => {
    let db;
    try {
        db = new Database(DBPATH);
        
        console.log('Connected to database.');
    } catch (error) {
        console.error('Failed to initialize the database:', error.message);
        if (db) {
            db.close();
            console.log('Database connection closed due to error.');
        }
        process.exit(1);
    }

    process.on('SIGINT', () => {
        db.close();
        console.log('Database connection closed.');
        process.exit(0);
    });

    return db;
};

module.exports = initializeDatabase();
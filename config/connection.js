const mysql = require('mysql2');
require('dotenv').config();

// Connection object
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employees_db',
        port: 3306
    },
    console.log('Succesfully connected to employees database.')
);

module.exports = db;
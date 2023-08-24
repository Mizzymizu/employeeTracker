const mysql = require('mysql2');
require('dotenv').config();

// Connection object
const db = mysql.createConnection(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    },
    console.log('Succesfully connected to employees database.')
);

module.exports = db;
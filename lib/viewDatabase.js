// .js file to view the Departments, Roles, and Employees
// Connect to database
const db = require('../config/connection')

// View the Departments 
const viewDepts = async () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM department`;
        db.query(sql, (err, res) => {
            if (err) {
                reject(err);
                return;
            } else {
                console.table(res);
                resolve();
            }
        })
    })
};

// View all Roles
const viewRoles = async () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM role`;
        db.query(sql, (err, res) => {
            if (err) {
                reject(err);
                return;
            } else {
                console.table(res);
                resolve();
            }
        })
    })
};

// View all Employees
const viewEmployees = async () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM employee`;
        db.query(sql, (err, res) => {
            if (err) {
                reject(err);
                return;
            } else {
                console.table(res);
                resolve();
            }
        })
    })
};

module.exports = {
    viewDepts,
    viewRoles,
    viewEmployees
};

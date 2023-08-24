// .js file to view the Departments, Roles, and Employees
// Connect to database
const db = require('../config/connection')

// View the Departments 
const viewDepts = async () => {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        selectAction();
    });
};

// View all Roles
const viewRoles = async () => {
    db.query(`SELECT * FROM role`, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        selectAction();
    });
};

// View all Employees
const viewEmployees = async () => {
    db.query(`SELECT * FROM employee`, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        selectAction();
    });
};

module.exports = {
    viewDepts,
    viewRoles,
    viewEmployees
};

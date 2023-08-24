// npm packages needed
const inquirer = require('inquirer');
const mysql = require('mysql2');
const viewDB = require('./viewDatabase');
const addtoDB = require('./addtoDatabase');

const selectAction = () => {
    const questions = [
        {
            name: "selectAction",
            type: "list",
            message: "Please select an option:",
            choices: [
                {
                    name: 'View all Departments',
                    value: 'viewDepts'
                },
                {
                    name: 'View all Roles',
                    value: 'viewRoles'
                },
                {
                    name: 'View all Employees',
                    value: 'viewEmployees'
                }
            ],
        }
    ]
    return inquirer.prompt(questions)
};

const menu = async () => {
    const action = await selectAction();
    if (action.selectAction === 'viewDepts') {
        viewDB.viewDepts();
    } else if (action.selectAction === 'viewRoles') {
        viewDB.viewRoles();
    } else if (action.selectAction === 'viewEmployees') {
        viewDB.viewEmployees();
    }
}

module.exports = menu;
// npm packages needed
const inquirer = require('inquirer');
const mysql = require('mysql2');
const viewDB = require('./viewDatabase');
const addtoDB = require('./addtoDatabase');
const express = require('express');

const selectAction = () => {
    const questions = [
        {
            name: "selectAction",
            type: "list",
            message: "Please select an option:",
            choices: [
                "View all Departments",
                "View all Roles",
                "View all Employees",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee Role"
            ],
        }
    ]
    return inquirer.prompt(questions)
};

const menu = async () => {
    const action = await selectAction();
    switch (action) {
        case "View all Departments":
             viewDB.viewDepts();
            break;
        case "View all Roles":
            viewDB.viewRoles();
            break;
        case "View all Employees":
            viewDB.viewEmployees();
            break;
    }
}

module.exports = menu;
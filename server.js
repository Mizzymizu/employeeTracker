const express = require('express');
const mysql = require('mysql2');
const menu = require('./lib/cli');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Launching application
const init = () => {
    menu();
};

init();
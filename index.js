const inquirer = require("inquirer");
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];

function engineerData() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name:',
          validate: (name) => {
            if (name) {
              return true;
            } else {
              console.log('This question requires an answer.');
              return false;
            }
          },
        },
        {
          type: 'list',
          name: 'role',
          message: 'You are the Manager.',
          choices: ['Manager'],
        },
        {
          type: 'input',
          name: 'id',
          message: "Please enter your employee ID number:",
          validate: (id) => {
            if (id) {
              return true;
            } else {
              console.log("This question requires an answer.");
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'email',
          message: "What is your email address:",
          validate: (email) => {
            if (email) {
              return true;
            } else {
              console.log('This question requires an answer.');
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is your office number:',
          validate: (officeNumber) => {
            if (officeNumber) {
              return true;
            } else {
              console.log('This question requires an answer.');
              return false;
            }
          },
        },
      ])
      .then((answers) => {
        const Manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.role,
          answers.officeNumber
        );
        employees.push(Manager);
        newMember();
      });
  };

  const newMember = () => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'role',
          message: "Please select a role:",
          choices: ['Engineer', 'Intern'],
        },
      ])
      .then((roles) => {
        if (roles.role === 'Engineer') {
        }
        if (roles.role === 'Intern') {
        }
      });
  };
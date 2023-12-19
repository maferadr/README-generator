 // What was your motivation?
// Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// What problem does it solve?
// What did you learn?
// What makes your project stand out?

// Description, Table of Contents, Installation, Usage, License, 
//Contributing, Tests, and Questions.

//Questions => Github, email, and additional questions. => Bear in mind table of contents.

//Packages needed for the application to run
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('../README-generator/utils/generateMarkdown')

//Array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a name for your project.'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter the Author Name'
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project Description.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage of the Application'
    },
    //List of License options for the user to choose
    //Underscore sign to avoid errors on the Badge Shields.io set up
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a License.',
        choices: ['MIT_License', 
            'Apache_license 2.0',
            'Microsoft_Public_License',
            'PostgreSQL_License.'
        ]
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please enter a list of contributors if Any',
        default: ''
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter an Email Address.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Account.'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation to build this project?'
    },
    //Author will explain the functionality of the Application
    {
        type: 'input',
        name: 'functionality',
        message: 'How to go through the application?'
    },
    {
        type: 'input',
        name: 'learning',
        message: 'What did you learn?'
    },
    {
        type: 'input',
        name: 'challenges',
        message: 'Challenges and tips to keep in mind',
    },
]

    // questions.forEach(question =>{
    //     inputText.text.textContent = $(questions)
    // })
   


//Function to write the README file
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//Function to initialize app
function init(){
    inquirer.prompt(questions)
    .then((responses) =>{
        console.log('Creating professional README.md file...');
        writeToFile('README.md', generateMarkdown({...responses}));
    })
};

//Call for the function to initialize it
init();

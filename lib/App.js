const inquirer = require('inquirer');
const pageGenerator = require('../src/page-generator')

const generatePage = require('../src/page-generator');
//(name, id, email, extra)

class App {
    constructor() {
        this.cardArray = [];
        this.idCounter = 1;

        this.roles = ["Engineer", "Intern", "Employee"];
        this.questions = [{
            type: "input",
            name: "name",
            message: "What is their name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email address?"
        }];
        this.extraQuestions = {
            Employee: false,
            Engineer: "What is their GitHub username?",
            Intern: "What school do they go to?"
        };
    };

    //get info for manager, calls cardCreator
    initialize() {
        console.log("Welcome to the team profile generator!");
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?"
            },
            {
                type: "input",
                name: "extra",
                message: "What is your office number?"
            }
        ]).then(({ name, email, extra }) => {
            let manager = ["Manager", name, this.idCounter, email, extra];
            this.cardArray.push(manager);
            this.idCounter++;
            this.cardCreator();
        });
    };

    //create a card (calls nextCard)
    cardCreator() {
        inquirer.prompt({
            type: "list",
            name: "role",
            message: "What role is this team member?",
            choices: this.roles
        }).then(({role}) => {
            //remove extra question if it exists
            this.questions.length > 2 ? this.questions.pop() : null;

            //create the extra question
            let extraQuestion = role === "Employee" ? null : {
                type: "input",
                name: "extra",
                message: this.extraQuestions[role]
            };

            //add extra question if role is not employee
            Boolean(extraQuestion) ? this.questions.push(extraQuestion) : null;
            inquirer.prompt(this.questions)
            .then(({name, email, extra}) => {
                let employee = role === "Employee" ? [role, name, this.idCounter, email] : [role, name, this.idCounter, email, extra];
                this.cardArray.push(employee);
                this.idCounter++;
                this.nextCard();
            });
        });
    };

    //do you want to add another card? then end if no (calls createPage)
    nextCard() {
        inquirer.prompt({
            type: 'confirm',
            name: 'addMore',
            message: 'Would you like to add another team member?'
        //destructure name from the prompt object
        }).then(({ addMore }) => {
            addMore ? this.cardCreator() : this.createPage();
        });
    };

    //create a page
    createPage() {
        generatePage(this.cardArray);
    };
};

module.exports = App;
const fs = require('fs');
const inquirer = require('inquirer');

const terminalMarkdown = require('./terminal-markdown');
const getParsedReadme = require('./get-parsed-readme');

module.exports = (readmeMarkdown) => {
    const {
        intro,
        promptMessage,
        sections,
    } = getParsedReadme(readmeMarkdown)

    console.log();
    console.log(intro);
    console.log();

    function prompt() {
        inquirer.prompt([{
            name: 'helpIndex',
            type: 'list',
            message: promptMessage,
            choices: [
                ...sections.map(({ title }, i) => ({ name: title, value: i })),
                new inquirer.Separator(),
                {name: 'Exit', value: 'exit'}
            ],
        }]).then((answers) => {
            if (answers.helpIndex !== 'exit') {
                const helpContents = sections[answers.helpIndex].contents;
                terminalMarkdown(helpContents);
                prompt();
            }
        });
    }
    prompt();
}
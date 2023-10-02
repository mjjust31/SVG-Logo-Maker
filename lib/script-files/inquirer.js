const inquirer = require("inquirer");

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "Please enter up to three characters",
      name: "text",
      validate: function (input) {
        const done = this.async();
        if (input.length > 3 || input.length === 0) {
          done("You need provide character length between 1 and 3");
          return;
        }
        done(null, true);
      },
    },
    {
      type: "input",
      message:
        "Please enter a color for your text (color keyword or hexadecimal number)",
      name: "textColor",
    },
    {
      type: "list",
      message: "Select a shape",
      name: "shape",
      choices: ["circle", " ", "square"],
      default: "circle",
    },
    {
      type: "input",
      message:
        "Please enter a color for your shape (color keyword or hexadecimal number)",
      name: "shapeColor",
    },
  ]);
}

module.exports = promptUser;

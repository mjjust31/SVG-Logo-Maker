const inquirer = require("inquirer");

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "Please enter up to three characters",
      name: "text",
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
      choices: ["circle", "triangle", "square"],
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

const promptUser = require("./inquirer");

promptUser()
  .then((answers) => {
    console.log(answers);
    console.log(answers.text)
    console.log(answers.textColor)
  })
  .catch((error) => {
    console.log(error);
  });

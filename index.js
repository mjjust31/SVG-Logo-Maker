const promptUser = require("./inquirer");

promptUser()
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    console.log(error);
  });

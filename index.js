const promptUser = require("./lib/script-files/inquirer");

promptUser()
  .then(({ text, textColor, shape, shapeColor }) => {
    //destructure the answers object to use user answer for easier code.

    if (text.length > 3 || text.length === 0) {
      console.log("incorrect length");
    } else {
      console.log(text);
    }
  })
  .catch((error) => {
    console.log(error);
  });

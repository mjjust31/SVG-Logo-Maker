const promptUser = require("./lib/script-files/inquirer");
const fs = require("fs");
const path = require("path");
const { Shape, Circle } = require("./lib/script-files/shapes");

promptUser()
  .then((answers) => {
    // console.log("answers:", answers);
    const { text, textColor, shape, shapeColor } = answers;
    if (shape === "circle") {
      const logoCircle = new Circle(shapeColor, shapeColor);
      fs.writeFile("examples.svg", logoCircle.renderCircle(), (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("circle created");
        }
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });

const promptUser = require("./lib/script-files/inquirer");
const fs = require("fs");
const path = require("path");

promptUser()
  .then((answers) => {
    console.log('answers:',answers);
  })
  .catch((error) => {
    console.log(error);
  });

// function Shape(text, textColor, shape, shapeColor) {
//   this.text = text;
//   this.textColor = textColor;
//   this.shape = shape;
//   this.shapeColor = shapeColor;
// }

// function renderCircle(text, textColor, shape, ShapeColor, circle) {
//   Shape.call(this, text, textColor, shape, shapeColor);
//   this.circle = circle;
// }

// fs.writeFile("shape.svg", answers, (err) =>
//   err ? console.error(err) : console.log("Success!")
// );

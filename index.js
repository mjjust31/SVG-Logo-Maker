const promptUser = require("./lib/script-files/inquirer");
const fs = require("fs");
const path = require("path");
const { Shape, Circle, Square, Triangle } = require("./lib/script-files/shapes");

promptUser()
  .then((answers) => {
    // console.log("answers:", answers);
    const { text, textColor, shape, shapeColor } = answers;
    if (shape === "circle") {
      const logoCircle = new Circle(shapeColor, shapeColor, text, textColor);
      fs.writeFile("./examples/circle-example.svg", logoCircle.renderCircle(), (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("circle created");
        }
      });
    }
    if (shape === "square") {
      const logoSquare = new Square(shapeColor, shapeColor, text, textColor);
      fs.writeFile("./examples/square-example.svg", logoSquare.renderSquare(), (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("square created");
        }
      });
    }
    if (shape === "triangle") {
      const logoTriangle = new Triangle(shapeColor, shapeColor, text, textColor);
      fs.writeFile("./examples/triangle-example.svg", logoTriangle.renderTriangle(), (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("triangle created");
        }
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });

# SVG-Logo-Maker

Recording: https://drive.google.com/file/d/1EyNjbzDt_V7ulw4pqdYzoo6_iNbU2I8f/view

## Project Description 

Using a Node.js command-line, this application will generate a circle, triangle, or sqaure with characters between 1-3 in length. 
Each example of a ciricle, square, and triabngle will be saved to the example forlder. 

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Table of Contents 
i. Project Title 
ii. Project Description
1. How to Install and Run the Project
2. How to use the project
3. Credits
4. License
5. Tests

##  How to Install and Run the Project

This project uses inquirer version 8.2.4 and jest version 26.6.3. After installing these libraries, you can go tthe comman line to run the project by typing "node index". 

##  How to use the project

In the command line, type "node index" for the questions to be generated for your logo. The user will be asked for text (up to three characters), text color, shape, and shape color. Once all of the questions are answered, the logo will be rendered in a svg file under the example folder. This project was built to become familiar with class constructors and beginning to create test-driven code. 

##  Credits 
- Using Object.value: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
- Using Object.keys: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
- SVG files is that later elements are rendered atop previous elements.https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
-Crash Course Testing: https://www.youtube.com/watch?v=7r4xVDI2vho&t=605s
-Crash Course OOP: https://www.youtube.com/watch?v=vDJpGenyHaA&t=1564s


## License

MIT





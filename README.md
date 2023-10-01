# SVG-Logo-Maker




Using Object.value
Using Object.keys
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every




The `forEach` method does not provide a built-in way to break or stop the iteration early. This means that even if an empty string is encountered in the array, the iteration will continue until all elements have been processed.

On the other hand, the `every` method is specifically designed for scenarios where you want to check if all elements in an array satisfy a certain condition. It iterates over the array and returns `true` if the given callback function returns `true` for every element. If the callback function returns `false` for any element, the iteration is stopped and `every` immediately returns `false`.




While not a requirement, it is recommended that you place any common functionality and properties shared by the `Triangle`, `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code in the child classes.

The following example test should pass:

```js
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');



Reference: 
1.SVG files is that later elements are rendered atop previous elements.https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
2.The SVG file can be referenced with an object element:
ex: <object data="image.svg" type="image/svg+xml"></object>



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
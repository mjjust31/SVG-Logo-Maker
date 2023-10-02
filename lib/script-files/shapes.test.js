const promptUser = require("./inquirer"); //import the promptUser function to test it.
const { Shape, Circle, Square, Triangle } = require("./shapes");

describe("Triangle", () => {
  it("should return a triangle based on user prompts", () => {
    const triangleTest = new Triangle("blue", "blue", "MMM", "white");
    expect(triangleTest.stroke).toBe("blue");
    expect(triangleTest.fill).toBe("blue");
    expect(triangleTest.text).toBe("MMM");
    expect(triangleTest.textColor).toBe("white");
  });
});


describe("Circle", () => {
  it("should return a Circle based on user prompts", () => {
    const circleTest = new Circle("blue", "blue", "MMM", "white");
    expect(circleTest.stroke).toBe("blue");
    expect(circleTest.fill).toBe("blue");
    expect(circleTest.text).toBe("MMM");
    expect(circleTest.textColor).toBe("white");
  });
});


describe("Sqaure", () => {
  it("should return a square based on user prompts", () => {
    const squareTest = new Square("blue", "blue", "MMM", "white");
    expect(squareTest.stroke).toBe("blue");
    expect(squareTest.fill).toBe("blue");
    expect(squareTest.text).toBe("MMM");
    expect(squareTest.textColor).toBe("white");
  });
});

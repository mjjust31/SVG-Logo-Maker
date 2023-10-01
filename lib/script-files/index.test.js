const index = require("../../index");
const promptUser = require("./inquirer"); //import the promptUser function to test it.

describe("inquirer", () => {
  describe("promptUser", () => {
    it("should return an object with four answers", () => {
      const userAnswers = promptUser(); // Call the "promptUser" function
      const object = {
        text: "JMJ",
        textColor: "green",
        shape: "circle",
        shapeColor: "pink",
      };
      const objectLength = Object.keys(object).length; //testing length
      const values = Object.values(userAnswers);

      expect(typeof userAnswers).toBe("object");
      expect(objectLength).toBe(4);
      expect(values.every((value) => value !== "")).toBe(true);
    });
  });
});

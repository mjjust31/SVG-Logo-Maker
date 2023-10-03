const index = require("../../index");
const promptUser = require("../script-files/inquirer");

describe("inquirer", () => {
  describe("promptUser", () => {
    it("should return an object with four answers", () => {
      const userAnswers = promptUser();
      const object = {
        text: "JMJ",
        textColor: "green",
        shape: "circle",
        shapeColor: "pink",
      };
      const objectLength = Object.keys(object).length;
      const values = Object.values(userAnswers);

      expect(typeof userAnswers).toBe("object");
      expect(objectLength).toBe(4);
      expect(values.every((value) => value !== "")).toBe(true);
    });
  });
});

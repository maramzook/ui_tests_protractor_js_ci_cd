var environment = require("./environment_variables.json");

describe("Protractor Demo App", function() {
  var firstNumber = element(by.model("first"));
  var secondNumber = element(by.model("second"));
  var goButton = element(by.id("gobutton"));
  var latestResult = element(by.binding("latest"));

  beforeEach(function() {
    browser.get(environment.baseUrl);
  });

  it("should have a title", function() {
    expect(browser.getTitle()).toEqual("Super Calculator");
  });

  it("should add 7 and 8", function() {
    firstNumber.sendKeys(7);
    secondNumber.sendKeys(8);

    goButton.click();

    expect(latestResult.getText()).toEqual("15");
  });

  it("should add one and four", function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(4);

    goButton.click();
    expect(latestResult.getText()).toEqual("5");
  });

  it("should read the value from an input", function() {
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute("value")).toEqual("1");
  });
});

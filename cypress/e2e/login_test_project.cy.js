import Login from "../PageObjects/LoginPage.js";

describe('POM - OrangeHRM Login Test', () => {
  it('LoginTest', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    cy.wait(3000);

    cy.fixture("orangehrm").then((data) => {
      const ln = new Login();
      ln.setUserName(data.username);
      ln.setPassword(data.password);
      ln.clickSubmit();
      ln.verifyLogin();
    });
  });
});

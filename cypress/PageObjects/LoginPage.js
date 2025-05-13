class Login {
    txtUserName = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    dbLabel = ".oxd-topbar-header-breadcrumb > .oxd-text";

    setUserName(username) {
        cy.get(this.txtUserName, { timeout: 10000 }).should('be.visible').type(username);
    }

    setPassword(password) {
        cy.get(this.txtPassword, { timeout: 10000 }).should('be.visible').type(password);
    }

    clickSubmit() {
        cy.get(this.btnSubmit).should('be.enabled').click();
    }

    verifyLogin() {
        cy.get(this.dbLabel, { timeout: 10000 })
          .should('be.visible')
          .and('have.text', 'Dashboard');
    }
}

export default Login;



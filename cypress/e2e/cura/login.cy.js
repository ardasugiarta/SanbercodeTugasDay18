import baseLogin from "../../support/PageObject/loginPage.cy"

describe('Login Verification', () => {
  const BaseLogin = new baseLogin()

  // Login success
  it('login_success', () => {
    cy.visit('')
    BaseLogin.clickMakeApp()
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    BaseLogin.validationSuccess()
  })

  //Login failed-invalid password
  it('login_failed_invalid_password', () => {
    cy.visit('')
    BaseLogin.clickMakeApp()
    BaseLogin.inputUsername()
    BaseLogin.inputWrongPassword()
    BaseLogin.clickLogin()
    BaseLogin.validationFailed()
  })

  //Login failed-empty password
  it('login_failed_empty_password', () => {
    cy.visit('')
    BaseLogin.clickMakeApp()
    BaseLogin.inputUsername()
    BaseLogin.inputEmptyPassword()
    BaseLogin.clickLogin()
    BaseLogin.validationFailed()
  })

  // Login failed-empty username and password
  it('login_failed_empty_username_and_password', () => {
    cy.visit('')
    BaseLogin.clickMakeApp()
    BaseLogin.inputEmptyUsername()
    BaseLogin.inputEmptyPassword()
    BaseLogin.clickLogin()
    BaseLogin.validationFailed()
  })
})
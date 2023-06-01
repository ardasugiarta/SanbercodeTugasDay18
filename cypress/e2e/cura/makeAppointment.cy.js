import baseLogin from "../../support/PageObject/loginPage.cy"
import makeAppointment from "../../support/PageObject/makeAppointmentPage.cy"

const makeAppointmentData = require("../../fixtures/cura/makeAppointment.json")

describe('Make Appointment', () => {
  const BaseLogin = new baseLogin()
  const MakeAppointment = new makeAppointment()

  // Make Appointment Success
  it('make_appointment_success', () => {
    cy.visit('')
    BaseLogin.clickMakeApp()
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.clickLogin()
    MakeAppointment.chooseFacility()
    MakeAppointment.clickCheckBox()
    MakeAppointment.clickProgram()
    MakeAppointment.clickVisitDate()
    cy.contains(makeAppointmentData.date).click();
    MakeAppointment.inputComment()
    MakeAppointment.clickBook()
    MakeAppointment.validationSuccess()
  })
})
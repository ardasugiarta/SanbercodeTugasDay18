const makeAppointmentData = require("../../fixtures/cura/makeAppointment.json")

class makeAppointment{
    facility = '#combo_facility'
    checkBox = '.checkbox-inline'
    program = '.col-sm-4 > :nth-child(2)'
    visitDate = '#txt_visit_date'
    comment = '#txt_comment'
    btnBook = '#btn-book-appointment'
    summary = '#summary'

    chooseFacility(){
        cy.get(this.facility).select(makeAppointmentData.facility)
    }

    clickCheckBox(){
        cy.get(this.checkBox).click()
    }

    clickProgram(){
        cy.get(this.program).click()
    }

    clickVisitDate(){
        cy.get(this.visitDate).click()
    }
    
    inputComment(){
        cy.get(this.comment).type(makeAppointmentData.comment)
    }

    clickBook(){
        cy.get(this.btnBook).click()
    }

    validationSuccess(){
        cy.get(this.summary).should('be.visible')
    }
}
export default makeAppointment;
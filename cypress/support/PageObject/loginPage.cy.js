const loginData = require('../../fixtures/cura/login.json')

class baseLogin{
    btnMakeApp = '#btn-make-appointment'
    username = '#txt-username'
    password = '#txt-password'
    btnLogin = '#btn-login'
    facility = '#combo_facility'
    warning = '.text-danger'

    clickMakeApp(){
        cy.get(this.btnMakeApp).click()
    }

    clickLogin(){
        cy.get(this.btnLogin).click()
    }

    inputUsername(){
        cy.get(this.username).type(loginData.validEmail)
    }

    inputPassword(){
        cy.get(this.password).type(loginData.validPassword)
    }

    inputWrongPassword(){
        cy.get(this.password).type(loginData.invalidPassword)
    }

    inputEmptyUsername(){
        cy.get(this.username).clear()
    }

    inputEmptyPassword(){
        cy.get(this.password).clear()
    }

    validationSuccess(){
        cy.get(this.facility).should('be.visible')
    }

    validationFailed(){
        cy.get(this.warning).should('contain.text', 'Login failed! Please ensure the username and password are valid.')
    }
}
export default baseLogin;
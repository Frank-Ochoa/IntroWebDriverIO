import Base from '../Base'

class LoginPage extends Base {
	// will get Selectors
	get loginForm() {
		return $('#login_form')
	}

	get usernameInput() {
		return $('#user_login')
	}

	get passwordInput() {
		return $('#user_password')
	}

	get submitButton() {
		return $('input[type="submit"]')
	}

	get error() {
		return $('.alert-error')
	}

	// And have functions that we can use with those Selectors
	formIsVisible() {
		this.loginForm.waitForExist()
	}

	fillForm(username, password) {
		this.usernameInput.setValue(username)
		this.passwordInput.setValue(password)
	}

	submitForm() {
		this.submitButton.click()
	}

	login(username, password) {
		this.formIsVisible()
		this.fillForm(username, password)
		this.submitForm()
	}
}

export default new LoginPage()

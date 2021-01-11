import LoginPage from '../page-objects/pages/LoginPage'
import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Login / Logout Flow', () => {
	it('Should not login with invalid credentials', () => {
		App.openHomePage()
		Navbar.clickSignIn()
		LoginPage.formIsVisible()
		LoginPage.fillForm('invalid', 'invalid')
		LoginPage.submitForm()
		// Use . when working with class
		const message = LoginPage.error
		expect(message).toHaveText('Login and/or password are wrong.')
	})

	it('Should Login with valid credentials', () => {
		App.openHomePage()
		Navbar.clickSignIn()
		LoginPage.formIsVisible()
		LoginPage.fillForm('username', 'password')
		LoginPage.submitForm()
		Navbar.insideNavBarIsVisible()
	})

	it('Should logout from app', () => {
		// $('.icon-user').waitForExist()
		// $('.icon-user').click()
		// $('#logout_link').waitForExist()
		// $('#logout_link').click()
		// Check if some element exists on the expected page
		App.logout()
		Navbar.signInButtonIsVisible()
	})
})

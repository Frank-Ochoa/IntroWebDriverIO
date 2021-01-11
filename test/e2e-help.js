import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import HelpPage from '../page-objects/pages/HelpPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E - Test Help Section', () => {
	it('Should Login into Application', () => {
		browser.url('http://zero.webappsecurity.com/')
		App.openLogin()
		LoginPage.login('username', 'password')
		Navbar.insideNavBarIsVisible()
	})

	it('Should Load Help Content', () => {
		Navbar.clickCogWheel()
		// Call wait for exist on content that is dynamic, ie content that can change or isn't always there
		Navbar.clickHelpButton()
		// Click on title but since multiple h3, click specific h3 child of class span8
		expect(HelpPage.title).toHaveText('How do I log into my account?')
		// Click partial text if unique on page
		HelpPage.clickTransferFunds()
		expect(HelpPage.title).toHaveText('How do I transfer funds?')
		HelpPage.clickPayBills()
		expect(HelpPage.title).toHaveText('How do I pay bills?')
	})
})

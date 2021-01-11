import { medium } from '../lib/timeouts'
import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe('Make a Payment', () => {
	it('Should Login into Application', () => {
		browser.url('http://zero.webappsecurity.com/')
		App.openLogin()
		LoginPage.login('username', 'password')
		Navbar.insideNavBarIsVisible()
	})

	it('Should make a payment', () => {
		const payBills = $('#pay_bills_tab')
		payBills.waitForExist()
		payBills.click()

		const payee = $('#sp_payee')
		payee.waitForExist()
		payee.selectByAttribute('value', 'apple')

		const account = $('#sp_account')
		account.waitForExist()
		account.selectByVisibleText('Checking')

		const amount = $('#sp_amount')
		amount.waitForExist()
		amount.setValue('100')

		const date = $('#sp_date')
		date.waitForExist()
		date.setValue('2021-01-06')

		browser.keys('Tab')

		const description = $('#sp_description')
		description.waitForExist()
		description.setValue('For Iphone')

		browser.pause(medium)

		const payButton = $('#pay_saved_payees')
		payButton.waitForExist()
		payButton.click()

		const successMessage = $('#alert_content')
		successMessage.waitForExist()
		expect(successMessage).toHaveText('The payment was successfully submitted.')
	})
})

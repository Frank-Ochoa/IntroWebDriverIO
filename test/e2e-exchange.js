import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Currency Exchange', () => {
	it('Should Login into Application', () => {
		browser.url('http://zero.webappsecurity.com/')
		App.openLogin()
		LoginPage.login('username', 'password')
		Navbar.insideNavBarIsVisible()
	})

	it('Should make currency exchange', () => {
		const payBills = $('#pay_bills_tab')
		payBills.waitForExist()
		payBills.click()

		// Right click href, copy selector
		const purchaseForeign = $('#tabs > ul > li:nth-child(3) > a')
		purchaseForeign.waitForExist()
		purchaseForeign.click()

		const purchaseCurrency = $('#pc_currency')
		purchaseCurrency.waitForExist()
		purchaseCurrency.selectByAttribute('value', 'DKK')

		const amount = $('#pc_amount')
		amount.waitForExist()
		// Always needs to be a string
		amount.setValue('10000000')

		const fromCurrency = $('#pc_inDollars_false')
		fromCurrency.waitForExist()
		fromCurrency.click()

		const calcCosts = $('#pc_calculate_costs')
		calcCosts.waitForExist()
		calcCosts.click()

		const purchaseButton = $('#purchase_cash')
		purchaseButton.waitForExist()
		purchaseButton.click()

		const successMessage = $('#alert_content')
		successMessage.waitForExist()
		expect(successMessage).toHaveText(
			'Foreign currency cash was successfully purchased.'
		)
	})
})

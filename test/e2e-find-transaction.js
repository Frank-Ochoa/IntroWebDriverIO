import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import InsideNavbar from '../page-objects/components/InsideNavbar'
import Navbar from '../page-objects/components/Navbar'
import FindTransactionsPage from '../page-objects/pages/FindTransactionsPage'

describe('Transaction Filter', () => {
	it('Should Login into Application', () => {
		App.openLogin()
		LoginPage.login('username', 'password')
		Navbar.insideNavBarIsVisible()
	})

	it('Should Find Transaction', () => {
		InsideNavbar.clickAccountActivityTab()
		InsideNavbar.clickFiltersLink()

		FindTransactionsPage.fillDescription('test')
		//const submitButton = $('#find_transactions_form > div.pull-right > button')
		FindTransactionsPage.findTransactions()
		FindTransactionsPage.filteredResultsIsVisible()

		const message = FindTransactionsPage.message
		expect(message).toHaveText('No results.')
	})
})

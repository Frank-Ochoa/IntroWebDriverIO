import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Search', () => {
	it('Should Load Homepage', () => {
		App.openHomePage()
	})

	it('Submit Search Box', () => {
		Navbar.search('bank')
		const resultsTitle = $('h2')
		resultsTitle.waitForExist()
		expect(resultsTitle).toHaveText('Search Results:')
	})
})

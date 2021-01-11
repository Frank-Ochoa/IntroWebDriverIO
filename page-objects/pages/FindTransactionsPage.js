import Base from '../Base'

class FindTransactionsPage extends Base {
	get description() {
		return $('#aa_description')
	}

	get submitButton() {
		return $('button[type="submit"]')
	}

	get filteredResults() {
		return $('#filtered_transactions_for_account')
	}

	get message() {
		return $('.well')
	}

	fillDescription(value) {
		this.description.waitForExist()
		this.description.setValue(value)
	}

	findTransactions() {
		this.submitButton.waitForExist()
		this.submitButton.click()
	}

	filteredResultsIsVisible() {
		this.filteredResults.waitForExist()
	}
}

export default new FindTransactionsPage()

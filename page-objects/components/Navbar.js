import Base from '../Base'

class Navbar extends Base {
	get searchBox() {
		return $('#searchTerm')
	}

	get signInButton() {
		return $('#signin_button')
	}

	get insideNavBar() {
		return $('.nav-tabs')
	}

	get cogWheel() {
		return $('.icon-cog')
	}

	get helpButton() {
		return $('#help_link')
	}

	search(text) {
		this.searchBox.waitForExist()
		this.searchBox.setValue(text)
		browser.keys('Enter')
	}

	signInButtonIsVisible() {
		this.signInButton.waitForExist()
	}

	clickSignIn() {
		this.signInButton.waitForExist()
		this.signInButton.click()
	}

	clickCogWheel() {
		this.cogWheel.waitForExist()
		this.cogWheel.click()
	}

	clickHelpButton() {
		this.helpButton.waitForExist()
		this.helpButton.click()
	}

	insideNavBarIsVisible() {
		this.insideNavBar.waitForExist()
	}
}

export default new Navbar()

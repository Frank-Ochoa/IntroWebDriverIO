class App {
	openHomePage() {
		browser.url('http://zero.webappsecurity.com/index.html')
	}

	openLogin() {
		browser.url('http://zero.webappsecurity.com/login.html')
	}

	openFeedBackPage() {
		browser.url('http://zero.webappsecurity.com/feedback.html')
	}

	logout() {
		browser.url('http://zero.webappsecurity.com/logout.html')
	}
}

export default new App()

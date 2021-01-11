import { short, medium, long } from '../lib/timeouts'
import { mobile, tablet, desktop } from '../lib/devices'

describe('First Steps with WebDriverIO', () => {
	it('Load Example Website', () => {
		browser.url('http://www.example.com')
		expect(browser).toHaveUrl('http://www.example.com/')
		expect(browser).toHaveTitle('Example Domain')
	})

	it('H1 should be visible', () => {
		// Get selector and save to variable
		const h1 = $('h1')
		// Webdriver will wait till its visible then start an action on it
		h1.waitForExist()
		// Do assertion
		expect(h1).toBeVisible()
	})

	it('Check Link Value', () => {
		const link = $('a')
		expect(link).toHaveLink('https://www.iana.org/domains/example')
	})

	it('Get Element Text', () => {
		const text = $('h1').getText()
		const h1 = $('h1')
		h1.waitForExist()
		expect(h1).toHaveText('Example Domain')
	})

	it('Assert Attribute', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
		const button = $('#submit-button')
		button.waitForExist()
		expect(button).toHaveAttrContaining('type', 'submit')
	})

	it('Assert Value', () => {
		const button = $('#populate')
		button.waitForExist()
		expect(button).toHaveValue('Populate')
	})

	it('Save Screenshot', () => {
		browser.saveScreenshot('your-name.png')
	})

	it('Change Browser Viewport', () => {
		browser.setWindowSize(1650, 1050)
		// For debugging purposes only
		//browser.pause(long)
	})

	it('Set Mobile View', () => {
		browser.setWindowSize(mobile[0], mobile[1])
		browser.pause(short)
	})

	it('Set Tablet View', () => {
		browser.setWindowSize(tablet[0], tablet[1])
		browser.pause(medium)
	})

	it('Set Desktop View', () => {
		browser.setWindowSize(desktop[0], desktop[1])
		browser.pause(long)
	})
})

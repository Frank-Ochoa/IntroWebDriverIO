import { short, medium, long } from '../lib/timeouts'

describe('Browser Actions', () => {
	// it('Inputs', () => {
	// 	browser.url('https://devexpress.github.io/testcafe/example/')
	// 	const input = $('#developer-name')
	// 	input.waitForExist()
	// 	input.setValue('Mike')
	// 	browser.pause(medium)
	// 	input.clearValue()
	// 	browser.pause(medium)
	// 	input.addValue('Freddy')
	// 	browser.pause(medium)
	// })

	// it('Click', () => {
	// 	const populate = $('#populate')
	// 	populate.waitForExist()
	// 	// Can also double click instead of a single click
	// 	populate.click()
	// })

	it('Radio Button', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
		const radio = $('#linux')
		radio.waitForExist()
		radio.click()
		browser.pause(short)
	})

	it('CheckBox', () => {
		const checkBox = $('#traffic-markup-analysis')
		checkBox.waitForExist()
		checkBox.click()
		browser.pause(short)
	})

	it('SelectBox', () => {
		const selectBox = $('#preferred-interface')
		selectBox.waitForExist()
		selectBox.selectByIndex(1)
		browser.pause(short)
		selectBox.selectByVisibleText('Both')
		browser.pause(short)
	})
})

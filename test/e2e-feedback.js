import App from '../page-objects/App'
import FeedbackPage from '../page-objects/pages/FeedbackPage'

describe('E2E Feedback', () => {
	it('Should Load Feedback Form', () => {
		App.openFeedBackPage()
		// Selecting just the element
		FeedbackPage.formIsVisible()
	})

	it('Should Submit Feedback Form', () => {
		FeedbackPage.fillForm(
			'Freddy',
			'joeschmo@aol.com',
			'Best Ever',
			'This is the best ever'
		)

		FeedbackPage.submitForm()
		expect(browser).toHaveUrl(
			'http://zero.webappsecurity.com/sendFeedback.html'
		)
	})
})

const nightmare = require('nightmare')

const browser = nightmare({
  // show: true
})

describe('Tram-One Example on Webpack dev server', () => {
  describe('HomePage', () => {
    it('should have the default title', (done) => {
      browser.goto('http://localhost:8080')
        .evaluate(() => document.querySelector('h1').outerText)
        .then(title => {
          expect(title).toBe('tram-one-example')
          done()
        })
    })
  })
  describe('ErrorPage', () => {
    it('should show the error message with attempted route', (done) => {
      browser.goto('http://localhost:8080/invalid-page')
        .evaluate(() => document.querySelector('code').outerText)
        .then(errorMessage => {
          expect(errorMessage).toBe('No route /invalid-page')
          done()
        })
    })
  })
})


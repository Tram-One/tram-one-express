const nightmare = require('nightmare')
const fs = require('fs')
const browser = nightmare({
  webPreferences: {
    javascript: false
  }
})

browser.on('page', (type) => {
  if (type === 'error') {
    fail(`Error was thrown on the page`)
  }
})

describe('Tram-One Example on Webpack dev server (with JS off)', () => {
  beforeAll((done) => {
    browser.goto('http://localhost:8080')
      .html('./tests/no-js-result.html', 'HTMLOnly')
      .then(() => done())
  })
  it('should show default page when JS is disabled', (done) => {
    fs.readFile('./tests/no-js-result.html', 'utf8', function(err, html){
      if (err) fail('Could not read no-js-result.html')
      expect(html).toContain('<h1>Javascript Disabled</h1>')
      done()
    })
  })
})


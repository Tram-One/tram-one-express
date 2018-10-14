module.exports = {
  'Stack Overflow noscript test': function (browser) {
    browser
      .url('https://stackoverflow.com')
      .waitForElementVisible('body', 3000)
      .waitForElementVisible('#noscript-warning', 3000)
      .assert.containsText('#noscript-warning', 'Stack Overflow works best with JavaScript enabled')
      .end()
  }
}

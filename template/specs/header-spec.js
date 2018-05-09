const header = require('../elements/app-header')

describe('header', () => {
  it('should have the title', () => {
    const page = header()
    expect(page.outerHTML).toMatch('%TITLE%')
  })
})

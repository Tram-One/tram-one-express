module.exports = (options) => `
const header = require('../elements/header')

describe('header', () => {
  it('should have the title', () => {
    const page = header()
    expect(page.textContent).toEqual('${options.name}')
  })
})
`

const Tram = require('tram-one')
const html = Tram.html()

module.exports = () => {
  return html`
    <h1>
      %TITLE%
    </h1>
  `
}

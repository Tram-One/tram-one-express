const Tram = require('tram-one')
const html = Tram.html({
  'app-header': require('../elements/app-header')
})

module.exports = () => {
  return html`
    <div>
      <app-header />
      <div>
        Thank you for using Tram-One!<br />
        To get started, edit <code>%TITLE%/pages/home.js</code>.
      </div>
    </div>
  `
}

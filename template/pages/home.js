const Tram = require('tram-one')
const html = Tram.html({
  'app-header': require('../elements/app-header'),
  'no-js-warning': require('../elements/no-js-warning')
})

module.exports = (store, actions) => {
  const advanceColor = () => {
    actions.advance()
  }
  return html`
    <div>
      <app-header color=${store.color} onclick=${advanceColor} />
      <no-js-warning />
      <div>
        Thank you for using Tram-One!<br />
        To get started, edit <code>%TITLE%/pages/home.js</code>.
      </div>
    </div>
  `
}

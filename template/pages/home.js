const Tram = require('tram-one')
const html = Tram.html({
  header: require('../elements/header')
})

module.exports = () => {
  return html`
    <div>
      <header></header>
      <div>
        Thank you for using Tram-One!<br>
        To get started, edit <code>%TITLE%/pages/home.js</code>.
      </div>
    </div>
  `
}

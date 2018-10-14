const Tram = require('tram-one')
const html = Tram.html()

module.exports = () => {
  return html`
    <div>
      <noscript>
        <h1>Javascript Disabled</h1>
        Use this page to show content when Javascript has been disabled
      </noscript>
    </div>
  `
}

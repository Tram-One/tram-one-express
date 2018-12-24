const Tram = require('tram-one')
const html = Tram.html()

const style = `
  border: solid;
  border-radius: 1em;
  padding: 0 1em;
  background: #fff0f0;
`

module.exports = () => {
  return html`
    <noscript>
      <div style=${style}>
        Oh No! It looks like JS has been disabled. Please enable it to use this applicaiton.
      </div>
    </noscript>
  `
}

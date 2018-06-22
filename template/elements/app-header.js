const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs) => {
  const style = `
    color: ${attrs.color}; background: black;
    cursor: pointer; text-align: center;
    padding: 1em; user-select: none;
    margin: -8px -8px 8px -8px;
  `
  return html`
    <h1 style=${style} onclick=${attrs.onclick} >
      %TITLE%
    </h1>
  `
}

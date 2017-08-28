module.exports = (options) => `
const Tram = require('tram-one')
const html = Tram.html()
${options.css ? `
const headerStyle = \`
  width: 100%;
  background: black;
  color: white;
  text-align: center;
  padding: 1em 0em;;
\`` : ``}

module.exports = (${options.extraParams ? 'attrs, children' : ''}) => {
  return html\`
    <h1${options.css ? ' style=${headerStyle}' : ''}>
      ${options.name}
    </h1>
  \`
}
`

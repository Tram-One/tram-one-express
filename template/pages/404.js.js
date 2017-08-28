module.exports = (options) => `
const Tram = require('tram-one')
const html = Tram.html()

module.exports = (${options.extraParams ? 'state' : ''}) => {
  return html\`
    <div>
      <h1>404</h1>
      <code>No route \${window.location.pathname}</code><br>
      Check <code>${options.name}/main.js</code> to see all the available routes.
    </div>
  \`
}
`

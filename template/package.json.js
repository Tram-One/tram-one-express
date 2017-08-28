module.exports = (options) => `
{
  "name": "${options.name}",
  "version": "1.0.0",
  "scripts": {
    "start": "budo main.js:bundle.js --pushstate --dir public"${options.tests ? `,
    "test": "testem -f ./specs/testem.yml"` : ''}
  },
  "keywords": [
    "${options.name}",
    "tram-one"
  ],
  "dependencies": {
    "budo": "^10.0.4",
    ${options.tests ? `
    "browserify": "^14.4.0",
    "testem": "^1.16.2",
    ` : ''}
    "tram-one": "^1.4.1"
  }
}
`

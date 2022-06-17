var bench = require('./bench')
var belCreateElement = require('../')
var hyperx = require('hyperx')

var h = hyperx(belCreateElement, {comments: true})

function raw (label, items) {
  var div = document.createElement('div')
  var h1 = document.createElement('h1')
  label = document.createTextNode(label)
  h1.appendChild(label)
  var ul = document.createElement('ul')
  items.forEach(function (item) {
    var li = document.createElement('li')
    item = document.createTextNode(item)
    li.appendChild(item)
    ul.appendChild(li)
  })
  div.appendChild(h1)
  div.appendChild(ul)
  return div
}

function withBel (label, items) {
  return h`<div>
    <h1>${label}</h1>
    <ul>
      ${items.map(function (item) {
        return h`<li>${item}</li>`
      })}
    </ul>
  </div>`
}

console.log('Creating trees...')
var data = ['grizzly', 'polar', 'brown']
bench('raw', function () {
  raw('test', data)
})
bench('withBel', function () {
  withBel('test', data)
})

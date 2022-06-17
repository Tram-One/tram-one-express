var test = require('tape')
var nano = require('../')()
var hyperx = require('hyperx')

var h = hyperx(nano, {comments: true})

test('creates an element', function (t) {
  t.plan(3)
  var button = h`
    <button onclick=${function () { onselected('success') }}>
      click me
    </button>
  `

  var result = h`
    <ul>
      <li>${button}</li>
    </ul>
  `

  function onselected (result) {
    t.equal(result, 'success')
    t.end()
  }

  t.equal(result.tagName, 'UL')
  t.assert(result.querySelector('button').textContent.match('click me'))

  button.click()
})

test('using class and className', function (t) {
  t.plan(2)
  var result = h`<div className="test1"></div>`
  t.equal(result.className, 'test1')
  result = h`<div class="test2 another"></div>`
  t.equal(result.className, 'test2 another')
  t.end()
})

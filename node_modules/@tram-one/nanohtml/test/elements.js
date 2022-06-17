var test = require('tape')
var nano = require('../')
var hyperx = require('hyperx')

var html = hyperx(nano.html, {comments: true})
var svg = hyperx(nano.svg, {comments: true})

test('create inputs', function (t) {
  t.plan(5)

  var expected = 'testing'
  var result = html`<input type="text" value="${expected}" />`
  t.equal(result.tagName, 'INPUT', 'created an input')
  t.equal(result.value, expected, 'set the value of an input')

  result = html`<input type="checkbox" checked />`
  t.equal(result.getAttribute('type'), 'checkbox', 'created a checkbox')
  t.equal(result.getAttribute('checked'), 'checked', 'set the checked attribute')
  t.equal(result.getAttribute('disabled'), null, 'should not have set the disabled attribute')

  t.end()
})

test('can update and submit inputs', function (t) {
  t.plan(2)
  document.body.innerHTML = ''
  var expected = 'testing'
  function render (data, onsubmit) {
    var input = html`<input type="text" value="${data}" />`
    return html`<div>
      ${input}
      <button onclick=${function () {
        onsubmit(input.value)
      }}>submit</button>
    </div>`
  }
  var result = render(expected, function onsubmit (newvalue) {
    t.equal(newvalue, 'changed')
    document.body.innerHTML = ''
    t.end()
  })
  document.body.appendChild(result)
  t.equal(document.querySelector('input').value, expected, 'set the input correctly')
  document.querySelector('input').value = 'changed'
  document.querySelector('button').click()
})

test('svg', function (t) {
  t.plan(2)
  var result = svg`<svg width="150" height="100" viewBox="0 0 3 2">
    <rect width="1" height="2" x="0" fill="#008d46" />
  </svg>`
  t.equal(result.tagName, 'svg', 'create svg tag')
  t.equal(result.childNodes[0].tagName, 'rect', 'created child rect tag')
  t.end()
})

test('comments', function (t) {
  var result = html`<div><!-- this is a comment --></div>`
  t.equal(result.outerHTML, '<div><!-- this is a comment --></div>', 'created comment')
  t.end()
})

test('style', function (t) {
  t.plan(2)
  var name = 'test'
  var result = html`<h1 style="color: red">Hey ${name.toUpperCase()}, <span style="color: blue">This</span> is a card!!!</h1>`
  t.equal(result.style.color, 'red', 'set style color on parent')
  t.equal(result.querySelector('span').style.color, 'blue', 'set style color on child')
  t.end()
})

test('adjacent text nodes', function (t) {
  t.plan(2)
  var who = 'world'
  var exclamation = ['!', ' :)']
  var result = html`<div>hello ${who}${exclamation}</div>`
  t.equal(result.childNodes.length, 1, 'should be merged')
  t.equal(result.outerHTML, '<div>hello world! :)</div>', 'should have correct output')
  t.end()
})

test('for attribute is set correctly', function (t) {
  t.plan(1)
  var result = html`<div>
    <input type="file" name="file" id="heyo" />
    <label for="heyo">label</label>
  </div>`
  t.ok(result.outerHTML.indexOf('<label for="heyo">label</label>') !== -1, 'contains for="heyo"')
  t.end()
})

test('events are added to element events property', function (t) {
  t.plan(1)
  var result = html`<div>
    <input oninput="onInputFunction" onkeyup="onKeyUpFunction" />
  </div>`
  t.deepEqual(result.querySelector('input').events, ['oninput', 'onkeyup'])
  t.end()
})

test('events are not added to element attributes', function (t) {
  t.plan(2)
  var result = html`<div>
    <input oninput="onInputFunction" onkeyup="onKeyUpFunction" />
  </div>`
  t.notOk(result.querySelector('input').getAttribute('oninput'))
  t.notOk(result.querySelector('input').getAttribute('input'))
  t.end()
})

test('allow objects to be passed', function (t) {
  t.plan(1)
  var result = html`<div>
    <div ${{ foo: 'bar' }}>hey</div>
  </div>`
  t.ok(result.outerHTML.indexOf('<div foo="bar">hey</div>') !== -1, 'contains foo="bar"')
  t.end()
})

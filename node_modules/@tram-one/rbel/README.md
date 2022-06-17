# rbel

Fork of [rbel](https://github.com/aaaristo/rbel)

use custom elements in tagged template literals

# example

```js
const domBuilder = require('hyperx')
const h = require('nanohtml');
const html = require('rbel')(domBuilder, h, {
    row: (attrs, children) => html`
        <div class="row">
           ${children}
        </div>`,
    column: (attrs, children) => html`
        <div class="col col-md-${attrs.md}">
           ${children}
        </div>`,
});

console.log(html`
<row>
    <column md="12">
        <span>1 ciao!</span>
    </column>
</row>`.outerHTML);
```

Values to use for `domBuilder`:
* hyperx - hyperx
* hyperz - hyperz

Values to use for `h`:

* virtual-dom - `vdom.h`
* react - `React.createElement`
* bel - `require('bel').createElement` (only client side see [#1](https://github.com/aaaristo/rbel/issues/1))
* belit - belit (both SSR and client)
* hyperscript - hyperscript

### Description
Hook that returns path variables based on the route.
Can return path parameters, query params, and more.
It's internal functionality is powered by the package
[rlite](https://www.npmjs.com/package/rlite-router)

Rather than using XML templates to define routes, this method enables
routing in javascript using a hook like result.

### Parameters
`{String} [pattern]` - path for resolving path parameters (not required for query params)

### Returns
`{Object}` - object with `matches` key, and if it matched, path and query parameters

### setupUrlParams
There is an underlying function that can return the hook with a non-standard routing method. This method takes in the following parameters:

`{Function} [getPath]` - function to return the current path, defaults to reading window.location.href when using `useUrlParams`.

It returns a new hook that will resolve params based on the new function.

## Examples
Examples are based on it's usage in [Tram-One](https://tram-one.io/#use-url-params), however they should work in any view framework.


### Check Route Example
```javascript
import { registerHtml, useUrlParams } from 'tram-one'
import HomePage from './pages/home'
import UserPage from './pages/user'
import NotFoundPage from './pages/not-found'

export default () => {
  if (useUrlParams('/').matches) return HomePage();
  if (useUrlParams('/user').matches) return UserPage();
  return NotFoundPage();
}
```

### Get Url Params Example (path is `/user/exampleUser?session=true`)
```javascript
import { registerHtml, useUrlParams } from 'tram-one'


export default () => {
  const params = useUrlParams('/user/:userId')
  params.userId // => exampleUser
  params.session // => true
}
```

### Custom Get Path Example
```javascript
import { setupUrlParams } from 'use-url-params'

const customGetPath = () => window.location.port
export default setupUrlParams(customGetPath)
```

# %TITLE%

## Developement Instructions
1. In the root directory, run `npm install` to install all the project dependencies
2. Run `npm start` to start the dev server
3. Navigate to http://localhost:9966 (or the url provided after running `npm start`)

## Developement Commands
Below are a list of commands used for developement. The logic for all the commands are in the local `package.json`
- `npm start` - starts a server hosting the webapp on localhost using budo; will live update with changes
- `npm run build` - builds a final distributable using browserify
- `npm run test-dev` - starts a server hosting test files on localhost; Test results are shown when you navigate to the webapp on a browser
- `npm test` - runs tests against all browsers on the device

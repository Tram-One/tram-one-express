# %TITLE%

## Development instructions

1. In the root directory, run `npm ci` to install all the project dependencies
2. Run `npm start` to start the dev server
3. Navigate to http://localhost:1234 (or the url provided after running `npm start`)

## Development commands

Below are a list of commands used for development. The logic for all the commands is in the local `package.json`

- `npm start` - starts a server hosting the webapp on localhost using [Parcel](https://parceljs.org/) and will watch for changes
- `npm run build` - builds a final distributable using [Parcel](https://parceljs.org/)
- `npm test` - runs tests in [Jest](https://jestjs.io/) watch loop
- `npm run deploy` - builds the project and pushes it to a `gh-pages` branch which you can access by going to the gh-pages url for your project.

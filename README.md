<p align="center"><a href="http://tram-one.io/" target="_blank"><img src="https://raw.githubusercontent.com/Tram-One/tram-logo/master/v3/tram.svg?sanitize=true" height="128"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/tram-one-express"><img src="https://img.shields.io/npm/dm/tram-one-express.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/tram-one-express"><img src="https://img.shields.io/npm/v/tram-one-express.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/tram-one-express"><img src="https://img.shields.io/npm/l/tram-one-express.svg" alt="License"></a>
</p>


# Tram-One Express

Tram-One Express is a generator for building tram-one applications.

## Usage
To use tram-one-express, install using npm, and then run the command with the name of the app you want to build:
```
$ npm install -g tram-one-express
$ tram-one-express app-name
```
This will create a directory in your current directory with the name that you pass into tram-one-express.

## What's in the box
Below are a list of files and directories that are created after running tram-one-express
```
app-name/
├── README.md
├── elements
│   └── header.js
├── main.js
├── package.json
├── pages
│   ├── 404.js
│   └── home.js
├── public
│   ├── favicon.png
│   └── index.html
└── specs
    ├── header-spec.js
    ├── specs.js
    ├── testem.html
    └── testem.yml
```

## Developement Commands
Below are a list of commands used for developement. The logic for all the commands are in the local `package.json`
- `npm run generate-example` - alias for `example-generate`
- `npm run example-generate` - creates an example app and installs dependencies in the example
- `npm run example-build` - runs `npm run build` in the example project
- `npm run example-start` - runs the start script, which kicks off a webpack server
- `npm run example-start-and-kill` - runs the webpack dev server, and then runs jasmine tests against the server (verifying that the default pages load correctly, and without any errors)
- `npm run example-check` - verifies default pages load correctly for a running instance of the example app (used in example-start-and-kill)
- `npm run example-test` - runs the test suite for the example app
- `example-browser-test` - runs tests for all locally available browsers, making sure that tram-one is able to render correctly for each one
- `ci-run` - runs all the commands in the order that circleci would trigger them, one automatically after the other

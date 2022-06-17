<p align="center"><a href="http://tram-one.io/" target="_blank"><img src="https://unpkg.com/@tram-one/tram-logo@4" width="128"></a></p>

<p align="center">
	<a href="https://www.npmjs.com/package/tram-one-express"><img src="https://img.shields.io/npm/dm/tram-one-express.svg" alt="Downloads"></a>
	<a href="https://www.npmjs.com/package/tram-one-express"><img src="https://img.shields.io/npm/v/tram-one-express.svg" alt="Version"></a>
	<a href="https://www.npmjs.com/package/tram-one-express"><img src="https://img.shields.io/npm/l/tram-one-express.svg" alt="License"></a>
</p>

# Tram-One Express

Tram-One Express is a generator for building tram-one applications.

## Usage

To use tram-one-express, run using `npx`, and pass the app-name of what project you want to create:

```
$ npx tram-one-express app-name
```

This will create a directory in your current directory with the name that you pass into tram-one-express.

## What's in the box

The scaffolded project includes a bare-bones setup that has all the tooling required to get started building!
See https://github.com/Tram-One/tram-one-express/tree/master-tram-one-example to see what the project looks like,
or try it live with codesandbox projects here: https://codesandbox.io/p/github/Tram-One/tram-one-express/master-tram-one-example

## Developement Commands

Below are a list of commands used for developement. The logic for all the commands are in the local `package.json`

- `npm run generate-example` - alias for `example-generate`
- `npm run example-generate` - creates an example app and installs dependencies in the example
- `npm run example-build` - runs `npm run build` in the example project
- `npm run example-test` - runs the test suite for the example app
- `npm run ci-run` - runs all the commands in the order that circleci would trigger them, one automatically after the other

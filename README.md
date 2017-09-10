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
- `npm start` - creates an example app `tram-one-example`

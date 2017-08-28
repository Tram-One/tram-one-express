#!/usr/bin/env node

const inquirer = require('inquirer')
const generate = require('./generate')

const optionQuestions = [
  {
    // name
    type: 'input',
    name: 'name',
    message: 'App Name?',
    default: 'tram-one-example'
  },
  {
    type: 'checkbox',
    name: 'options',
    message: 'Template Options?',
    choices: [
      {
        name: 'show unused tram-one parameters',
        value: 'extraParams'
      },
      {
        name: 'include example css',
        value: 'css'
      },
      {
        name: 'include full html file',
        value: 'html'
      },
      {
        name: 'include example tests',
        value: 'tests'
      }
    ]
  }
]

inquirer
  .prompt(optionQuestions)
  .then((answers) => {
    const options = answers.options.reduce((newOptions, option) => {
      return Object.assign({}, newOptions, {[option]: true})
    }, answers)
    delete options.options
    generate(options)
  })

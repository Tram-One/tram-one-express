#! /usr/bin/env node

const fs = require('fs')
const path = require('path')

const appTitle = process.argv[2] || 'tram-one-app'

const processFile = (file, currentPath) => {
  const filePath = path.join(currentPath, file)
  const newFilePath = filePath
    .replace(path.join(__dirname, 'template'), path.join(process.cwd(), appTitle))

  // copy a directory
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    // make the directory
    if (fs.existsSync(newFilePath)) {
      console.warn(`Folder ${newFilePath} already exists`)
    } else {
      fs.mkdirSync(newFilePath)
    }

    // process all the files in the directory
    const files = fs.readdirSync(filePath)
    files.forEach((file) => processFile(file, filePath))
    return
  }

  // copy a file
  const normalFile = fs.readFileSync(filePath)
    .toString()
    .replace('%TITLE%', appTitle)
  if (fs.existsSync(newFilePath)) {
    console.warn(`File ${newFilePath} already exists`)
  } else {
    fs.appendFileSync(newFilePath, normalFile)
  }
}

const filePath = path.join(__dirname, 'template')
console.log(`-.- Creating ${appTitle} `)
processFile('', filePath)
console.log('^o^ Finished! ')

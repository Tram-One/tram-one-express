const fs = require('fs')
const path = require('path')

module.exports = (options) => {
  if (fs.existsSync(options.name)) {
    console.warn(`Folder ${options.name} already exists`)
  } else {
    fs.mkdirSync(options.name)
  }

  const processFile = (file, currentPath) => {
    const filePath = path.join(currentPath, file)
    // console.log(currentPath)
    const newFilePath = filePath.replace(path.join(__dirname, 'template'), options.name)
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      // if it is the specs folder, and we don't have tests, don't include
      if (!options.tests && filePath === 'template/specs') {
        return
      }

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
    if (file.match(/.*\..*\.js/)) {
      // process a js template file
      const jsFile = require(path.join(__dirname, 'template', filePath))
      const resultFile = jsFile(options)

      // remove trailing or starting newlines
      // also remove any pair of newlines
      const cleanFile = resultFile.trim().replace('\n\n\n', '\n\n')

      const resultFilePath = newFilePath.slice(0, -3)
      if (fs.existsSync(resultFilePath)) {
        console.warn(`Folder ${resultFilePath} already exists`)
      } else {
        fs.appendFileSync(resultFilePath, cleanFile)
      }
    } else {
      // copy a non-template file
      const normalFile = fs.readFileSync(filePath)
      if (fs.existsSync(newFilePath)) {
        console.warn(`File ${newFilePath} already exists`)
      } else {
        fs.appendFileSync(newFilePath, normalFile)
      }
    }
  }

  const filePath = path.join(__dirname, 'template')
  console.log("CREATING STUFF")
  console.log(filePath)
  const files = fs.readdirSync(filePath)
  files.forEach((file) => processFile(file, filePath))
}

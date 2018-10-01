const requireYML = require('require-yml')
const circleConfig = requireYML('./.circleci/config.yml')

const spawn = require('cross-spawn')

const runCommands = circleConfig.jobs.build.steps
  .filter(step => step.run)
  .map(step => step.run)
  .forEach(step => {
    const commandPieces = step.split(' ')
    spawn.sync(commandPieces.slice(0, 1)[0], commandPieces.slice(1), {stdio: 'inherit'})
  })

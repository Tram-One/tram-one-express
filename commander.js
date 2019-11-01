const program = require('commander');
program.version('0.0.1');

program
    .option('-no-commit', 'no commit step')
    .option('--no-install', 'no install step')

program.parse(process.argv);
if (program.no-commit) {
    if (program.no-install) {

    } else {

    }
} else if (program.no-install) {
    if (program.no-commit) {

    } else {

    }
} else {

}
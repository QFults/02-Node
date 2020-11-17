const chalk = require('chalk')
const shuffle = require('shuffle-array')

console.log(chalk.blue('Hello'))

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

shuffle(nums)

console.log(nums)

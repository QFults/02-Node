// const chalk = require('chalk')
// const shuffle = require('shuffle-array')

// console.log(chalk.blue('Hello'))

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// shuffle(nums)

// console.log(nums)

// const axios = require('axios')

// axios.get('https://swapi.dev/api/people/1')
//   .then(res => {
//     console.log(res.data)
//   })
//   .catch(err => console.log(err))

const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'food',
    message: 'What is your favorite food?'
  },
  {
    type: 'list',
    name: 'choice',
    message: 'Select The Correct Answer:',
    choices: ['The Answer', 'true', 'The Correct Answer', 'Yes', 'Correct']
  }
])
  .then(answers => {
    console.log(answers)
  })
  .catch(err => console.log(err))
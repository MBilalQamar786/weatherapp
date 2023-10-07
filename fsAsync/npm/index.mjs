import chalk from 'chalk';
import validator from 'validator';
// The rest of your code here

console.log(chalk.blue.inverse('helllo world'))
console.log(chalk.bgRed('helllo world'))
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));
const a=validator.isEmail('bilal@gmail.com');
const b=validator.isStrongPassword('1234');
// const b=validator.isFloat('12.5');
console.log(a ? chalk.green.inverse(a) : chalk.red.inverse(a));
console.log(b ? chalk.green.inverse(b) : chalk.red.inverse(b));
import {mortgage, overpayment} from './mymodule.mjs'

console.log('Hello, Node.js!')
console.log(process.argv)

let [,,S,p,n] = process.argv;

S = parseInt(S)
p = parseInt(p)
n = parseInt(n)


const mortgageValue = mortgage(1e7, 10, 15);
const overpaymentValue = overpayment(1e7, 10, 15);

console.log(`Платеж: ${mortgageValue.toFixed(2)} руб`)
console.log(`Переплата: ${overpaymentValue.toFixed(2)} руб`)
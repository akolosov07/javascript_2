/* Реализуйте каррирование для функции сложения чисел sum() */

function sum(a, b){
  return a + b;
}
console.log(sum(3, 5));

/*const sum2 = function(a) {
  return function(b) {
    return a + b;
  }
}*/

const sum2 = a => b => a + b;

console.log(sum2(3)(5)); //8
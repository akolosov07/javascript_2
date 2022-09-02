/* Напишите функцию counter(), которая при каждом вызове возвращает число на единицу большее предыдушего  */

//const counter = (function(i = 1){
//    
//    function fn(){
//        return i++;
//    }
//    return fn;
//})()

const counter = ((i = 1) => () => i++)()

console.log( counter() ); //1
console.log( counter() ); //2
console.log( counter() ); //3
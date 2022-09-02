/* Факториал числа */
function fact(n) {
    return n > 0 ? n * fact(n - 1) : 1;
}

/* Написать тело функции reversePrint(), чтобы она при вызове доходила до самого глубокого свойства next и поднимаясь выводила числа. Например, 4,3,2,1.*/

function reversePrint (linkedList) {
   if(linkedList.next){
     reversePrint(linkedList.next)
   }
   console.log(linkedList.value);
}
 
var someList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
     }
};
console.log(someList);
reversePrint(someList);
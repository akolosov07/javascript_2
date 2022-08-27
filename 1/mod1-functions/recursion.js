/* Написать тело функции reversePrint(), чтобы она при вызове доходила до самого глубокого свойства next и поднимаясь выводила числа. Например, 4,3,2,1.*/

function reversePrint (linkedList) {
   // ...
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
reversePrint(someList);
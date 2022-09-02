const arr = ['Ехал','Грека', 'через', 'реку', 100]

console.log(arr.some(el => typeof el == 'number')); //true

console.log(arr.every(el => typeof el == 'number')); //false
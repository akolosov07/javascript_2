const arr = ['Ехал','Грека', 'через', 'реку']

/*
Найти первое слово содержащее 'ре', найти индекс
первого слова содержащего 'ре'
*/

console.log(arr.find(word => word.includes('ре')))

console.log(arr.findIndex(word => word.includes('ре')))
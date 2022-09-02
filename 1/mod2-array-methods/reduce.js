[10, 20, 30, 40, 50].reduce(function(prev, curr) {
    console.log(`prev=${prev}, curr=${curr}`)
    return prev + curr;
}) //150

const arr = ['Ехал','Грека', 'через', 'реку']

console.log(arr.reduce((p, c) => {
    return p + (c.includes('ре') ? 1 : 0)
}, 0))


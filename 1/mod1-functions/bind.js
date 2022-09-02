const book = {title: 'JS'};
function setPrice(price) {
    this.price = price;
}

//setPrice.apply(book, [1000]);
//setPrice.call(book, 1000);
const fn = setPrice.bind(book);
fn(1000);

console.log(book);
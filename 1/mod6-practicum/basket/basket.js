class OrderItem {
    #_uid;
    #_title;
    #_qty;
    #_price;

    constructor(uid, title, qty, price) {
        this.#_uid = uid;
        this.#_title = title;
        this.#_qty = qty;
        this.#_price = price;
    }

    get uid() {
        return this.#_uid;
    }

    get title() {
        return this.#_title;
    }

    get qty() {
        return this.#_qty;
    }

    get price() {
        return this.#_price;
    }

    incrementQty() {
        this.#_qty++;
    }

    decrementQty() {
        this.#_qty--;
        if(this.#_qty < 0)
            this.#_qty = 0;
    }
}

const items = [
    {
        uid: 234234,
        title: 'Товар1',
        qty: 2,
        price: 1000,

    },
    {
        uid: 234235,
        title: 'Товар2',
        qty: 3,
        price: 500,
    }
];

let listObjects = [];

items.forEach((obj) => {
    let orderItem = new OrderItem(obj.uid, obj.title, obj.qty, obj.price);
    listObjects.push(orderItem);
})

//https://stackoverflow.com/questions/2324782/how-to-use-createelement-to-create-a-new-table
//https://stackoverflow.com/questions/53913097/how-to-put-dynamic-colspan-into-html-table-using-javascript
//https://webplatform.github.io/docs/dom/tutorials/adding_and_deleting_elements/

function render() {
    

    const basket = document.querySelector('#basket');

    var oldData = basket.lastChild;
    if(oldData != null) basket.removeChild(oldData);
    const table = document.createElement('table');
    
    createHeader(table);
    let totalPrice = fillData(table);
    createFooter(table, totalPrice);

    basket.appendChild(table);
}

render();

function fillData(table) {
    let totalPrice = 0;
    for(let i = 0; i < listObjects.length; i++) {
        var order = listObjects[i];

        let row = document.createElement("tr");

        // #п/п
        let numberCell = document.createElement("td");
        //numberCell.id = 'data-uid'
        numberCell.innerHTML = order.uid;
        
        row.appendChild(numberCell);

        // Название товара
        let titleCell = document.createElement("td");
        titleCell.innerHTML = order.title;
        row.appendChild(titleCell);

        // Количество
        let qtyCell = document.createElement("td");
        qtyCell.setAttribute('data-uid', order.uid); 
        // label
        let qtyLable = document.createElement('label');
        qtyLable.innerHTML = order.qty;
        qtyCell.appendChild(qtyLable);
        // Increment
        let btnIncrement = document.createElement('button');
        btnIncrement.innerHTML = '+';
        btnIncrement.addEventListener('click', function(ev) {
            let id = this.parentNode.getAttribute('data-uid');
            for(let j = 0; j < listObjects.length; j++) {
                if(listObjects[j].uid == id) {
                    listObjects[j].incrementQty();
                    render();
                }
            }
        });
        qtyCell.appendChild(btnIncrement);
        // Decrement
        let btnDecrement = document.createElement('button');
        btnDecrement.innerHTML = '-';
        btnDecrement.addEventListener('click', function(ev) {
            let id = this.parentNode.getAttribute('data-uid');
            for(let j = 0; j < listObjects.length; j++) {
                if(listObjects[j].uid == id) {
                    listObjects[j].decrementQty();
                    render();
                }
            }
        });
        qtyCell.appendChild(btnDecrement);
        row.appendChild(qtyCell);

        // Цена за ед.
        let pCell = document.createElement("td");
        pCell.innerHTML = order.price;
        row.appendChild(pCell);

        // Всего
        let tCell = document.createElement("td");
        let price = order.price;
        let qty = order.qty;
        let rowPrice = price * qty;
        totalPrice += rowPrice;
        tCell.innerHTML = rowPrice;
        row.appendChild(tCell);
        
        // Удалить
        let deleteCell = document.createElement("td");
        deleteCell.setAttribute('data-uid', order.uid);
        const a = document.createElement('a');
        a.innerHTML = 'Удалить';
        a.href = '#';
        a.addEventListener('click', function(ev){
            ev.preventDefault();
            let id = this.parentNode.getAttribute('data-uid');
            
            listObjects = listObjects.filter(
                item => item.uid != id
            );

            render();
        });
        deleteCell.appendChild(a);
        row.appendChild(deleteCell);
        
        table.appendChild(row)
    }

    return totalPrice;
}

function createHeader(table) {
    let headerRow = document.createElement("tr");

    // #п/п
    let numberCell = document.createElement("td");
    numberCell.innerHTML = '#п/п';
    headerRow.appendChild(numberCell);

    // Название товара
    let titleCell = document.createElement("td");
    titleCell.innerHTML = 'Название товара';
    headerRow.appendChild(titleCell);

    // Количество
    let qtyCell = document.createElement("td");
    qtyCell.innerHTML = 'Количество';
    headerRow.appendChild(qtyCell);

    // Цена за ед.
    let priceCell = document.createElement("td");
    priceCell.innerHTML = 'Цена за ед.';
    headerRow.appendChild(priceCell);

    // Всего
    let totalCell = document.createElement("td");
    totalCell.innerHTML = 'Всего';
    headerRow.appendChild(totalCell);

    // Удалить
    let deleteCell = document.createElement("td");
    deleteCell.innerHTML = '';
    headerRow.appendChild(deleteCell);

    table.appendChild(headerRow);
}

function createFooter(table, totalPrice) {
   let footerRow = document.createElement("tr");

   // Итого
   let totaltd = document.createElement("td");
   totaltd.innerHTML = 'Итого:';
   totaltd.colSpan = 4;
   footerRow.appendChild(totaltd);
   
   // 2 Span
   let secondSpan = document.createElement("td");
   secondSpan.innerHTML = totalPrice;
   secondSpan.colSpan = 2;
   footerRow.appendChild(secondSpan);

   table.appendChild(footerRow);
}
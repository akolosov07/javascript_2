class Customer {
        constructor() {
            this.content = document.createElement('div');
            this.content.innerHTML = `
            <div class="container-fluid">
            <div class="row">
        
        
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    
            <h2 id="customers">Покупатели</h2>
            <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                <tr>
                    <th scope="col">Номер</th>
                    <th scope="col">Покупатель</th>
                    <th scope="col">Дата</th>
                    <th scope="col">Сумма заказа</th>
                    <th scope="col">Статус</th>
                </tr>
                </thead>
                <tbody>
                                  
                </tbody>
            </table>
            </div>
        
            </main>
            </div>
            </div>
            `;
            const targetElement = this.content.querySelector('table')

        fetch('http://localhost:5500/mock-api/customers.json')
        .then(res => res.json())  
        .then(res => {

            console.log(res)
            let items = ''
            res.forEach(({id, name, data, amount, status}) => {
                items += `
                <tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${data}</td>
                        <td>${amount}</td>
                        <td>${status}</td>
                    </tr>
                `
            })
            
            targetElement.innerHTML += items
        })
        }
        render() {
            console.log('отрисовка Customer')
            return this.content;
        }
}

export default Customer;
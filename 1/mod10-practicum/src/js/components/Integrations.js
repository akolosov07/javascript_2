class Integrations {
    constructor() {
        this.content = document.createElement('div');
        this.content.innerHTML = `
        <div class="container-fluid">
        <div class="row">
    
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <h2 id="integrations">Интеграции</h2>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                   <button type="button" class="btn btn-sm btn-outline-secondary">Добавить интеграцию</button>
               </div>
        </div>
    
        </main>
        </div>
        </div>
        `
    }

    render() {
        console.log('отрисовка Integrations')
        return this.content;
    }
}

export default Integrations;
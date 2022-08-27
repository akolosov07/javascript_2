class NotFound {
    constructor(){
        this.content = document.createElement('div');
        this.content.innerHTML += `<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        <h2>Страница не найдена</h2>
        
        </div>
        </main>`;
    }
    render (){
        return  this.content
    }
}

export default NotFound;
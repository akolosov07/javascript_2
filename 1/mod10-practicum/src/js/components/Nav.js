class Nav {
    constructor(app, options) {

        this.content = document.createElement('div');

        this.app = app;

        const liCollection = options.menuItems.map(item => {
            const li = document.createElement('li');
            li.classList.add("nav-item")

            

            const a = document.createElement('a');

            const span = document.createElement('span');
            span.setAttribute('data-feather', item.feather)
            a.appendChild(span);

            const text = document.createTextNode(item.title);

            a.appendChild(text);
            a.classList.add("nav-item")
            a.href = `#${item.path}`
            a.setAttribute('data-path', item.path)

            a.addEventListener('click', (ev) => {
                ev.preventDefault();
                this.app.clickPage('#' + ev.target.getAttribute('data-path'))
            })

            li.appendChild(a);
            return li;
        })
        

        this.content.innerHTML = `<div class="container-fluid">
        <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
            <ul class="nav flex-column">
            <!--<li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#dashboard">
                    <span data-feather="home"></span>
                    Дашборд
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#orders">
                    <span data-feather="file"></span>
                    Заказы
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#goods">
                    <span data-feather="shopping-cart"></span>
                    Товары
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#customers">
                    <span data-feather="users"></span>
                    Покупатели
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#reports">
                    <span data-feather="bar-chart-2"></span>
                    Отчёты
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#integrations">
                    <span data-feather="layers"></span>
                    Интеграции
                </a>
                </li>-->
            </ul>

            </div>
        </nav>
        </div>
        </div>
        `

        const ul = this.content.querySelector('ul');
        liCollection.forEach(li => ul.appendChild(li))
    }


    render() {
        console.log('отрисовка Nav')
        return this.content;
    }
}

export default Nav;
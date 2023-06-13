class headermain extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <nav>
            <ul>
                <li>
                    <a href="index.html">Inicio</a>
                </li>
                <li>
                    <a href="about.html">Servicios</a>
                </li>
                <li>
                    <a href="trainers.html">Colecciones</a>
                </li>
                <li>
                    <a href="contact.html">Sobre Nosotros</a>
                </li>
                <li>
                    <a href="contact.html">Contactanos</a>
                </li>
            </ul>
        </nav>
        `;
    }
}

window.customElements.define("menu-main", headermain);
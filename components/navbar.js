
class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/pages/about.html">About</a></li>
                    <li><a href="/pages/contact.html">Contact</a></li>
                </ul>
            </nav>
        `;
    }
}
customElements.define('navbar-component', Navbar);

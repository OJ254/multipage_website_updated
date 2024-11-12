
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>&copy; 2024 My Company</p>
            </footer>
        `;
    }
}
customElements.define('footer-component', Footer);

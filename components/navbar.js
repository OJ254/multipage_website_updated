class Navbar extends HTMLElement {
  connectedCallback() {
    const basePath = window.location.pathname.includes(
      "multipage_website_updated"
    )
      ? "/multipage_website_updated"
      : "";
    this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="${basePath}/index.html">Home</a></li>
                    <li><a href="${basePath}/pages/about.html">About</a></li>
                    <li><a href="${basePath}/pages/contact.html">Contact</a></li>
                </ul>
            </nav>
        `;
  }
}
customElements.define("navbar-component", Navbar);

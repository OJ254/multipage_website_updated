class Navbar extends HTMLElement {
  connectedCallback() {
    // Get current path and strip any potential folder name
    const pathSegments = window.location.pathname.split("/");
    const basePath = pathSegments.includes("multipage_website_updated")
      ? `/${pathSegments.slice(2).join("/")}`
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

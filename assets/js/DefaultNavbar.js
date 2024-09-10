class DefaultNavbar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ["title", "logo"];
  }

  attributeChangedCallback() {
    this.render();
  }
  render() {
    const title = this.getAttribute("title") || "";
    const logo = this.getAttribute("logo") || "";
    this.innerHTML = `
    <div></div>
    `;
  }
}

customElements.define("default-navbar", DefaultNavbar);

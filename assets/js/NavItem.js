class NavItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ["label", "url"];
  }

  attributeChangedCallback() {
    this.render();
  }
  render() {
    const label = this.getAttribute("label") || "";
    const url = this.getAttribute("url") || "";
    this.innerHTML = `
      <a href="${url}" class="text-red-500 flex h-6">${label}</a>
      `;
  }
}

customElements.define("nav-item", NavItem);

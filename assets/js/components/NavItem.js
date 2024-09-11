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
      <a href="${url}" class="lab-sm flex h-6 hover:text-neutral-500 transition-all ease-in duration-300">${label}</a>
      `;
  }
}

customElements.define("nav-item", NavItem);

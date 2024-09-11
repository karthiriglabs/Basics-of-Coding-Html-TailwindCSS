class BrandLogo extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  static get observedAttributes() {
    return "mode";
  }

  attributeChangedCalled() {
    this.render();
  }

  render() {
    const mode = this.getAttribute("mode") || "dark";

    this.innerHTML = `
    <a href="./index.html">
        <img
            src="./assets/svg/logo_${mode}.svg"
            alt="logo"
            class="h-12 w-auto flex justify-start items-center"
        />
    </a>
    
    `;
  }
}

customElements.define("brand-logo", BrandLogo);

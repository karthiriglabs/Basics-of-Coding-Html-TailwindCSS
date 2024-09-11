class PriceTag extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ["theme", "label", "icon", "alt"];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const theme = this.getAttribute("theme") || "";
    const label = this.getAttribute("label") || "Category";
    const icon = this.getAttribute("icon") || "";

    this.innerHTML = `
        <div class="flex w-full rounded-2xl px-5 py-2 border border-neutral-950 justify-center items-center gap-2 transition-all ease-in duration-300 bg-accent-${theme}">
        <p class="lab-md w-full text-center">${label}</p>
            <default-icon url="${icon}" alt="${label}">
            </default-icon>
          </div>
      `;
  }
}

customElements.define("price-tag", PriceTag);

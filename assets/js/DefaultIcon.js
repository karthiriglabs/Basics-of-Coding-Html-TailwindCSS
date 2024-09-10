class DefaultIcon extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ["alt", "url", "size"];
  }

  attributeChangedCallback() {
    this.render();
  }
  render() {
    const alt = this.getAttribute("alt") || "";
    const url = this.getAttribute("url") || "";
    const size = this.getAttribute("size") || "24";
    this.innerHTML = `
          <img class="min-w-6 min-h-6"
          width="${size}"
          height="${size}"
          src="${url}"
        alt="${alt}"
        >
      `;
  }
}

customElements.define("default-icon", DefaultIcon);

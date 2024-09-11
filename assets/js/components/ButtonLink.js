class ButtonLink extends HTMLElement {
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
    <a href=${url} class="flex gap-3 justify-end lab-sm hover:text-neutral-500 transition-all ease-in duration-300">
    ${label}
    <default-icon url="./assets/icons/arrow_outward.svg" alt="Button Link">
    </default-icon>
    </a>`;
  }
}

customElements.define("button-link", ButtonLink);

class DefaultSpacer extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <div class="w-full h-32"></div>
      `;
  }
}

customElements.define("default-spacer", DefaultSpacer);

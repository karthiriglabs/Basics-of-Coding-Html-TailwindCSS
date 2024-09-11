class QuickStat extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ["value", "description"];
  }

  attributeChangedCallback() {
    this.render();
  }
  render() {
    const value = this.getAttribute("value") || "";
    const description = this.getAttribute("description") || "";
    this.innerHTML = `
      <div class="flex flex-col justify-center items-start gap-1">
      <h4 class="text-neutral-50 h4">${value}</h4>
      <p class="text-neutral-50 body-md">${description}</p>
      </div>
      `;
  }
}

customElements.define("quick-stat", QuickStat);

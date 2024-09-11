class PriceItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ["label", "value1", "value2", "value3", "size"];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const size = this.getAttribute("size") || "lg";
    const label = this.getAttribute("label") || "Value";
    const value1 = this.getAttribute("value1") || "Value";
    const value2 = this.getAttribute("value2") || "Value";
    const value3 = this.getAttribute("value3") || "Value";

    this.innerHTML = `
        <div class="flex w-full justify-between lab-lg text-neutral-50 p-6 border-2 border-b-neutral-800  border-t-0 border-x-0">
            <p class="w-full text-neutral-50 ">${label}</p>
            <div class="flex w-full justify-between">
              <p class="w-full lab-${
                size ? "lg" : "xxl"
              } text-neutral-50 text-center w-full">${value1}</p>
              <p class="w-full lab-${
                size ? "lg" : "xxl"
              } text-neutral-50 text-center w-full">${value2}</p>
              <p class="w-full lab-${
                size ? "lg" : "xxl"
              } text-neutral-50 text-center w-full">${value3}</p>
            </div>
          </div>
      `;
  }
}

customElements.define("price-item", PriceItem);

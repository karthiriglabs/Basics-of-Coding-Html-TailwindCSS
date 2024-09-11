class SectorCard extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ["label", "description", "image", "url"];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const label = this.getAttribute("label") || "";
    const description = this.getAttribute("description") || "";
    const image = this.getAttribute("image") || "";
    const url = this.getAttribute("url") || "";

    this.innerHTML = `
          <a href=${url}>
              <div class="flex flex-col justify-between gap-6">
                <div
                  class="flex p-6 rounded-[40px] min-h-[396px] min-w-[200px] w-full h-auto object-contain"
                  style="background-image: url(${image}); background-size: cover; background-position: center;"
                >
                  <div>
                    <brand-button label="Try it now" url=${url} size="xs"></brand-button>
                  </div>
                </div>
                <div class="flex flex-col gap-4 w-full max-w-full">
                  <p class="lab-xl w-full">${label}</p>
                  <p class="w-full">${description}</p>
                </div>
              </div>
            </a>
      `;
  }
}

customElements.define("sector-card", SectorCard);

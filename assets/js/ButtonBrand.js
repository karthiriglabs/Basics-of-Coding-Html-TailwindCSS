class ButtonBrand extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ["size", "label", "url", "icon", "alt"];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const size = this.getAttribute("size") || "";
    const label = this.getAttribute("label") || "Button";
    const url = this.getAttribute("url") || "";
    const icon = this.getAttribute("icon") || "";
    const alt = this.getAttribute("alt") || "";
    let styles =
      "lab-md flex text-center justify-center items-center gap-2 transition-all ease-in duration-300 group";

    switch (size) {
      case "label":
        styles += "lab-md text-neutral-50 hover:text-neutral-500";
        break;
      case "xs":
        styles +=
          "lab-xs bg-neutral-50 px-4 py-2 rounded-full hover:scale-[103%]";
        break;
      case "sm":
        styles +=
          "lab-sm bg-brand px-8 py-3 min-w-40 rounded-full hover:shadow-xl hover:scale-[103%]";
        break;
      case "md":
        styles +=
          "lab-md bg-brand px-10 py-3 min-w-60 rounded-full hover:shadow-xl hover:scale-[103%]";
        break;
      case "lg":
        styles +=
          "lab-lg bg-brand px-16 py-4 min-w-80 rounded-full hover:shadow-xl hover:scale-[103%]";
        break;
    }

    this.innerHTML = `
        <button class="${styles}" onclick="window.location.href='${url}'">
          ${label}
          ${
            icon
              ? `
                <default-icon url="${icon}" alt="${alt}">
                </default-icon>
              `
              : ""
          }
        </button>
      `;
  }
}

customElements.define("brand-button", ButtonBrand);

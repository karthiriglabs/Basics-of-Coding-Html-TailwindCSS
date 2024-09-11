class DefaultButton extends HTMLElement {
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
    let styles = "";

    switch (size) {
      case "label":
        styles =
          "text-neutral-50 font-medium hover:text-neutral-500 text-[21px] leading-[32px] tracking-[0%] transition-all ease-in duration-300";
        break;
      case "x-small":
        styles = "padding: 4px 8px; font-size: 12px;";
        break;
      case "small":
        styles =
          "bg-brand text-black px-8 py-3 min-w-32 rounded-full font-fris flex justify-center items-center text-[18px] leading-[24px] tracking-[1%] hover:shadow-xl transition-all ease-in duration-300 hover:scale-[105%]";
        break;
      case "medium":
        styles =
          "bg-brand text-black px-10 py-3 min-w-60 rounded-full font-demibold flex justify-center items-center text-[21px] leading-[32px] tracking-[0%] hover:shadow-xl transition-all ease-in duration-300 gap-2 hover:scale-[105%]";
        break;
      case "large":
        styles = "padding: 20px 40px; font-size: 18px;";
        break;
      default:
        styles = "color: white; font-size: 14px;";
    }

    this.innerHTML = `
        <button class="${styles}" onclick="window.location.href='${url}'">
          ${label}
          ${
            icon
              ? `<default-icon url="${icon}" alt="${alt}"></default-icon>`
              : ""
          }
        </button>
      `;
  }
}

customElements.define("brand-button", DefaultButton);

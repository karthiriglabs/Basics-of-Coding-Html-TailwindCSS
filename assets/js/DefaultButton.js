class DefaultButton extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ["size", "label"];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const size = this.getAttribute("size") || "label";
    const label = this.getAttribute("label") || "Button";
    let styles = "";

    switch (size) {
      case "x-small":
        styles = "padding: 4px 8px; font-size: 12px;";
        break;
      case "small":
        styles =
          "background-color: #54EA54; padding: 12px 32px; font-size: 14px;";
        break;
      case "medium":
        styles = "padding: 16px 32px; font-size: 16px;";
        break;
      case "large":
        styles = "padding: 20px 40px; font-size: 18px;";
        break;
      default:
        styles = "color: white; font-size: 14px;";
    }

    this.innerHTML = `
        <button style="${styles}">
          ${label}
        </button>
      `;
  }
}

customElements.define("custom-button", DefaultButton);

class AccordionElement extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.addEventListener("click", this.toggle.bind(this));
  }

  static get observedAttributes() {
    return ["size", "label", "url", "icon", "alt", "toggle"];
  }

  connectedCallback() {
    if (!this.hasAttribute("toggle")) {
      const firstAccordion = document.querySelector("accordion-element");
      if (firstAccordion === this) {
        this.setAttribute("toggle", "open");
      } else {
        this.setAttribute("toggle", "closed");
      }
    }
  }

  attributeChangedCallback() {
    this.render();
  }

  toggle() {
    const toggle = this.getAttribute("toggle") === "open" ? "closed" : "open";
    this.setAttribute("toggle", toggle);

    if (toggle === "open") {
      this.closeOtherAccordions();
    }
  }

  closeOtherAccordions() {
    const accordions = document.querySelectorAll("accordion-element");
    accordions.forEach((accordion) => {
      if (accordion !== this) {
        accordion.setAttribute("toggle", "closed");
      }
    });
  }

  render() {
    const toggle = this.getAttribute("toggle") || "closed";
    const closedIcon = this.getAttribute("closedIcon") || "";
    const openIcon = this.getAttribute("openIcon") || "";
    const label = this.getAttribute("label") || "Button";
    const description = this.getAttribute("description") || "#";
    let styles =
      "rounded-[20px] flex flex-col gap-6 justify-start items-start p-8 border-2 transition-all ease-in-out duration-500";

    switch (toggle) {
      case "closed":
        styles += " bg-neutral-50 text-neutral-950 border-neutral-300";
        break;
      case "open":
        styles +=
          " bg-neutral-950 text-neutral-50 border-neutral-100 shadow-xl";
        break;
    }

    this.innerHTML = `
      <div class="flex flex-col gap-4 w-full max-w-[416px]">
        <div class="${styles}">
          <div class="flex flex-col gap-6 items-start justify-start w-full">
            <div class="flex gap-4 items-center justify-start">
              <default-icon url="${
                toggle === "closed" ? closedIcon : openIcon
              }" alt="${label}"></default-icon>
              <p class="lab-md ${
                toggle === "open" ? "text-neutral-50" : "text-neutral-950"
              } transition-colors duration-500 ease-in-out">${label}</p>
            </div>
            ${
              toggle === "open"
                ? `<p class="text-neutral-50 transition-opacity duration-500 ease-in-out">${description}</p>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("accordion-element", AccordionElement);

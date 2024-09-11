class TestimonyCard extends HTMLElement {
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
    const testimony = this.getAttribute("testimony") || "";
    const profile = this.getAttribute("profile") || "";
    const user = this.getAttribute("user") || "";
    const job = this.getAttribute("job") || "";
    const theme = this.getAttribute("theme") || "green";
    this.innerHTML = `
        <div class="p-8 rounded-[32px] bg-accent-${theme} min-h-[340px] max-w-[400px] w-full justify-between items-start flex flex-col hover:shadow-xl transition-all ease-in duration-300">
  <p class="cap-md">
    “${testimony}”
  </p>
  <div class="flex items-center justify-start gap-4">
    <img
      class="w-10 h-10 rounded-full overflow-hidden"
      src="${profile}"
      alt="person"
    />

    <div class="flex flex-col gap-0">
      <p class="cap-sm">${user}</p>
      <p class="cap-sm">${job}</p>
    </div>
  </div>
</div>

        `;
  }
}

customElements.define("testimony-card", TestimonyCard);

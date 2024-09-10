class DefaultNavbar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ["title", "logo"];
  }

  attributeChangedCallback() {
    this.render();
  }
  render() {
    const title = this.getAttribute("title") || "";
    const logo = this.getAttribute("logo") || "";
    this.innerHTML = `
        <section class="px-28 py-9 w-full flex justify-center">
      <nav class="flex w-full flex jusify-between gap-2 items-center">
        <img class="h-8" src="./assets/svg/logo_dark.svg" alt="logo" />

        <div class="flex w-full gap-6 justify-center">
          <nav-item class="h-6" href="#" label="Home"></nav-item>
          <nav-item href="#" label="Features"></nav-item>
          <nav-item href="#" label="Pricing"></nav-item>
          <nav-item href="#" label="Testimonials"></nav-item>
        </div>
        <button
          class="bg-brand text-black px-8 py-3 min-w-32 rounded-full font-medium flex justify-center items-center text-[18px] line-height[24px] tracking-[1%] hover:shadow-xl transition-all ease-in duration-300 hover:scale-[105%]"
        >
          Sign In
        </button>
      </nav>
    </section>
    `;
  }
}

customElements.define("default-navbar", DefaultNavbar);

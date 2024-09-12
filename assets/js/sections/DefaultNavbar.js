class DefaultNavbar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
       <section id="navbar" class="px-28 py-9 w-full flex justify-center">
        <nav class="flex w-full justify-between gap-2 items-center max-w-[1366px]">
          <brand-logo></brand-logo>
          <div class="flex w-full gap-6 justify-center flex-wrap">
          <nav-item href="./index.html" label="Home"></nav-item>
          <nav-item href="#features" label="Features"></nav-item>
          <nav-item href="#pricing" label="Pricing"></nav-item>
          <nav-item href="#testimony" label="Testimonials"></nav-item>
        </div>
        <brand-button label="Sign In" url="#" size="sm"></brand-button>
      </nav>
    </section>
    `;
  }
}

customElements.define("default-navbar", DefaultNavbar);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

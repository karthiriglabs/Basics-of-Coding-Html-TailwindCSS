class FooterSection extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `

    <section class="flex flex-col gap-8 px-[104px]">
      <div class="flex justify-between w-full items-center">
        <brand-logo mode="light"></brand-logo>
        <div class="flex gap-6 justify-center flex-wrap">
          <nav-item href="./index.html" label="Home"></nav-item>
          <nav-item href="#features" label="Features"></nav-item>
          <nav-item href="#pricing" label="Pricing"></nav-item>
          <nav-item href="#testimony" label="Testimonials"></nav-item>
        </div>
        <div class="flex gap-6 justify-end flex-wrap">
          <nav-item
            href="https://www.instagram.com"
            label="Instagram"
          ></nav-item>
          <nav-item href="https://www.facebook" label="Facebook"></nav-item>
          <nav-item href="https://www.x.com" label="Twitter"></nav-item>
        </div>
      </div>
      <div
        class="flex w-full justify-between items-center pt-8 pb-6 border-t-2 border-neutral-300"
      >
      <legal-item url="#" label="Copyright © 2024 AI Ally"></legal-item>
      <legal-item url="#" label="Privacy Policy"></legal-item>
 
      </div>
    </section>`;
  }
}
customElements.define("footer-section", FooterSection);

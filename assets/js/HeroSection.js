class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <section id="hero" class="w-full flex flex-col justify-center px-6">
      <div
        class="bg-neutral-950 flex justify-evenly pt-[60px] px-[120px] rounded-3xl overflow-hidden w-full gap-32 items-center"
      >
        <div class="flex flex-col gap-10 pl-10 justify-center">
          <div class="flex flex-col gap-1 max-w-[450px]">
            <h1 class="text-neutral-50 font-medium text-[60px]">
              Unleash the full potential of AI
            </h1>
            <p class="text-neutral-50 font-medium text-[18px]">
              AI Ally is a versatile assistant that utilizes state-of-the-art
              natural language processing to provide real-time support and
              assistance across various domains
            </p>
          </div>
          <div class="flex flex-col gap-16">
            <div class="flex gap-8 items-center justify-start">
              <brand-button
                label="Get the App"
                url="#"
                size="md"
                icon="./assets/icons/arrow_right_alt.svg"
                alt="Get the App"
              ></brand-button>
              <brand-button label="More" url="#" size="label"></brand-button>
            </div>
            <div class="flex gap-16 items-center justify-start">
              <quick-stat
                value="4.8"
                description="Rating on AppStore"
              ></quick-stat>
              <quick-stat value="700k+" description="Active users"></quick-stat>
            </div>
          </div>
        </div>
        <img
          class="max-w-[522px] w-full h-auto"
          src="./assets//images/hero.png"
          s
          alt="hero image"
        />
      </div>
    </section>
      `;
  }
}

customElements.define("hero-section", HeroSection);

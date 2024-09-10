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
      <section class="w-full flex flex-col justify-center px-6">
  <div class="bg-neutral-950 flex justify-evenly pt-[60px] px-[120px] rounded-3xl overflow-hidden w-full gap-32 items-center">
    <div class="flex flex-col gap-10 pl-10 justify-center">
      <div class="flex flex-col gap-1 max-w-[450px]">
        <h1 class="text-white font-medium text-[60px]">
          Unleash the full potential of AI
        </h1>
        <p class="text-white font-medium text-[18px]">
          AI Ally is a versatile assistant that uvtilizes state-of-the-art
          natural language processing to provide real-time support and
          assistance across various domains
        </p>
      </div>
      <div class="flex gap-8 items-center justify-start">
        <div>
          <button class="bg-brand text-black px-10 py-3 min-w-60 rounded-full font-demibold flex justify-center items-center text-[21px] line-height[32px] tracking-[0%] hover:shadow-xl transition-all ease-in duration-300 gap-2 hover:scale-[105%]">
            Get the App
            <default-icon
              url="./assets/icons/arrow_right_alt.svg"
              alt="Get the App"
            ></default-icon>
          </button>
        </div>
        <div>
          <a
            href="#"
            class="text-white font-medium hover:text-neutral-500 text-[21px] line-height[32px] tracking-[0%] transition-all ease-in duration-300"
          >
            More
          </a>
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

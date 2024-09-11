class TestimonySection extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `

    <section id="testimony" class="flex w-full justify-center items-center px-[104px]">
      <div
        class="w-full max-w-[1366px] flex flex-col gap-16 items-center justify-start"
      >
        <div class="flex justify-between w-full gap-6">
          <h1 class="h1">Testimonials</h1>
          <div class="flex w-full justify-end">
            <div class="flex justify-end items-start gap-16 w-full">
              <p class="max-w-[350px] w-full">
                Don't just take our word for it - hear from our satisfied
                clients who have experienced the transformative impact of our AI
                text tool.
              </p>
              <p class="max-w-[350px] w-full">
                Learn how this powerful tool has revolutionized their work and
                accelerated their success.
              </p>
            </div>
          </div>
        </div>
        <div class="flex gap-6 justify-between w-full">
          <testimony-card
            testimony="The excellent voice recognition quality of AI Ally app makes it perfect for dictation and note taking. I have never come across such accuracy before"
            profile="./assets/images/profile-1.png"
            user="Hawkeye Raghunathan"
            job="CEO, Aveva"
            theme="green"
          ></testimony-card>
          <testimony-card
            testimony="With the help of AI Ally, my work has become much easier and efficient. It provides quick and accurate answers to any questions I come across"
            profile="./assets/images/profile-2.png"
            user="Rajalekshmi Muthupadiya"
            job="Head of HR, Instill"
            theme="violet"
          ></testimony-card>
          <testimony-card
            testimony="I love how AI Ally personalizes to my needs and offers recommendations and solutions based on my preferences and behaviors"
            profile="./assets/images/profile-3.png"
            user="Dominion Nambiar"
            job="UX Designer, Cyber Unit"
            theme="blue"
          ></testimony-card>
        </div>
      </div>
    </section>`;
  }
}
customElements.define("testimony-section", TestimonySection);

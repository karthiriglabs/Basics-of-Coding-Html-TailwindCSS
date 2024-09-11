class SectorSection extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
<section class="flex w-full justify-center items-center px-[104px]">
<div
  class="w-full max-w-[1366px] flex flex-col gap-16 items-center justify-start"
>
  <div class="flex flex-col justify-start w-full gap-6">
    <h1 class="h1">Different destinations</h1>
    <div class="flex w-full justify-between">
      <div class="flex gap-16">
        <p class="max-w-[336px] w-full">
          We explore the diverse ways in which this technology can
          revolutionize work across various industries and fields.
        </p>
        <p class="max-w-[336px] w-full">
          Discover how AI can streamline processes and elevate your work
          to new heights.
        </p>
      </div>
      <button-link
        label="Discover all applications"
        url="#"
      ></button-link>
    </div>
  </div>

  <div class="flex w-full gap-6 justify-center">
    <sector-card
      image="./assets/images/card-1.png"
      label="Students"
      description="AI Ally can assist in research, provide learning materials, and answer questions"
      url="#"
    ></sector-card>
    <sector-card
      image="./assets/images/card-2.png"
      label="Professionals"
      description="AI Ally can provide quick access to relevant information and offer data analysis insignts"
      url="#"
    ></sector-card
    ><sector-card
      image="./assets/images/card-3.png"
      label="Writers"
      description="AI Ally can help writes by generating ideas, suggesting improvements in writing style"
      url="#"
    ></sector-card>
  </div>
  <brand-button
    label="And more than 50 other destinations"
    size="lg"
  ></brand-button>
</div>
</section>`;
  }
}
customElements.define("sector-section", SectorSection);

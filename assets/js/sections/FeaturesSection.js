class FeaturesSection extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
<section id="features"
      class="flex w-full items-center justify-center px-[120px] bg-neutral-100 pt-[140px]"
    >
      <div class="flex w-full justify-center items-center gap-20">
        <img
          class="max-w-[498px] w-full h-auto"
          src="./assets/images/faq.png"
          alt="AI Ally"
        />
        <div class="flex flex-col gap-4 w-full max-w-[416px]">
          <accordion-element
            closedIcon="./assets/icons/draw_collage.svg"
            openIcon="./assets/icons/draw_collage_light.svg"
            label="Help for designers"
            description="AI-powered applications can analyze vast amounts of visual data and provide designers with inspiration for their creative projects."
          ></accordion-element>
          <accordion-element
            closedIcon="./assets/icons/frame_inspect.svg"
            openIcon="./assets/icons/frame_inspect_light.svg"
            label="Finding information"
            description="AI Ally acts as your digital detective, swiftly uncovering answers, facts, and insights from the vast web—making information hunting a breeze!"
          ></accordion-element>
          <accordion-element
            closedIcon="./assets/icons/broadcast_on_home.svg"
            openIcon="./assets/icons/broadcast_on_home_light.svg"
            label="Home automation"
            description="AI Ally streamlines your home automation journey by providing personalized recommendations, troubleshooting tips, and step-by-step guides—all delivered with a touch of digital charm!"
          ></accordion-element>
          <accordion-element
            closedIcon="./assets/icons/animated_images.svg"
            openIcon="./assets/icons/animated_images_light.svg"
            label="Entertainment"
            description="“AI Ally, your digital companion, curates movie recommendations, crafts personalized playlists, and even challenges you to brain-teasing puzzles—because life's better with a touch of whimsy!"
          ></accordion-element>
          <accordion-element
            closedIcon="./assets/icons/event_available.svg"
            openIcon="./assets/icons/event_available_light.svg"
            label="Planning assistance"
            description="AI Ally, your trusty digital organizer, helps you map out schedules, set reminders, and even conjures up event ideas—because life's a grand adventure, and every good journey needs a roadmap!"
          ></accordion-element>
        </div>
      </div>
    </section>`;
  }
}
customElements.define("features-section", FeaturesSection);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

class PricingSection extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
<section
      id="pricing"
      class="w-full flex flex-col justify-center items-center px-6"
    >
      <div
        class="bg-neutral-950 pt-[112px] px-20 pb-0 rounded-3xl overflow-hidden flex w-full justify-center items-center"
      >
        <div
          class="flex flex-col justify-center items-center w-full max-w-[1366px] gap-[120px]"
        >
          <div
            class="text-neutral-50 h1 w-full flex flex-col gap-8 items-start justify-start"
          >
            <h1>Choose your favorite plan</h1>
            <div
              class="bg-neutral-800 p-6 rounded-[20px] w-full flex justify-between items-center"
            >
              <p class="lab-lg text-neutral-50 w-full">Subscription level</p>
              <div class="flex w-full justify-between gap-6">
                <price-tag
                  class="w-full"
                  theme="green"
                  label="Basic"
                  icon="./assets/icons/potted_plant.svg"
                ></price-tag>
                <price-tag
                  class="w-full"
                  theme="violet"
                  label="Advanced"
                  icon="./assets/icons/flash_on.svg"
                ></price-tag>
                <price-tag
                  class="w-full"
                  theme="yellow"
                  label="Premium"
                  icon="./assets/icons/ev_station.svg"
                ></price-tag>
              </div>
            </div>
            <price-item
              class="w-full"
              label="Number of Users"
              value1="1"
              value2="Up to 5"
              value3="Unlimited"
            ></price-item>
            <price-item
              class="w-full"
              label="Customer Support"
              value1="Online"
              value2="Priority"
              value3="Premium"
            ></price-item>
            <price-item
              class="w-full"
              label="Monthly Requests"
              value1="1000"
              value2="5000"
              value3="Unlimited"
            ></price-item>
            <price-item
              class="w-full"
              label="Data Packages"
              value1="1 GB"
              value2="5 GB"
              value3="10 GB"
            ></price-item>
            <price-item
              class="w-full"
              label="Flexible Cancellation"
              value1="Available"
              value2="Available"
              value3="Available"
            ></price-item>
            <price-item
              class="w-full"
              label="Subscription price"
              value1="$9.99"
              value2="$19.99"
              value3="$39.99"
            ></price-item>
          </div>

          <div class="flex gap-[168px] w-full justify-center items-center">
            <div class="flex flex-col gap-8 w-fit justify-center items-start">
              <div class="flex flex-col gap-3 max-w-[450px]">
                <h1 class="text-neutral-50 h1">Try it right now</h1>

                <p class="text-neutral-50">
                  Download the AI Ally on the AppStore and Google Play and
                  discover the world of artificial intelligence! Enjoy
                  innovative AI technologies directly on your device.
                </p>
              </div>
              <div class="flex gap-4 justify-start items-center w-fit">
                <img
                  class="w-auto h-[56px] min-h-[56px]"
                  src="./assets/svg/apple_app_store.svg"
                  alt="Apple App Store"
                />
                <img
                  class="w-auto h-[56px] min-h-[56px]"
                  src="./assets/svg/google_play_store.svg"
                  alt="Google Play Store"
                />
              </div>
            </div>
            <img
              class="w-full max-w-[369px]"
              src="./assets/images/plan.png"
              alt="pricing"
            />
          </div>
        </div>
      </div>
    </section>
    `;
  }
}
customElements.define("pricing-section", PricingSection);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

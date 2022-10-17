document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".team__splide")) {
    var teamSplide = new Splide(".team__splide", {
      type: "slide",
      perPage: 5,
      perMove: 5,
      gap: "48px",
      padding: "5px",
      direction: "rtl",
      lazyLoad: "nearby",
      pagination: false,
      speed: 1000,
      autoPlay: true,
      arrowPath:
        "M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM82.0607 13.0607C82.6464 12.4749 82.6464 11.5251 82.0607 10.9393L72.5147 1.3934C71.9289 0.807611 70.9792 0.807611 70.3934 1.3934C69.8076 1.97919 69.8076 2.92893 70.3934 3.51472L78.8787 12L70.3934 20.4853C69.8076 21.0711 69.8076 22.0208 70.3934 22.6066C70.9792 23.1924 71.9289 23.1924 72.5147 22.6066L82.0607 13.0607ZM2 13.5L81 13.5V10.5L2 10.5L2 13.5Z",
      classes: {
        prev: "splide__arrow--prev team__splide__prev",
        next: "splide__arrow--next team__splide__next",
      },
    });
    teamSplide.mount();
  }

  if (document.querySelector(".comments__splide")) {
    var commentSplide = new Splide(".comments__splide", {
      type: "slide",
      perPage: 3,
      perMove: 3,
      gap: "65px",
      direction: "rtl",
      lazyLoad: "nearby",
      pagination: false,
      speed: 1000,
      autoPlay: true,
    });
    commentSplide.mount();
  }
});

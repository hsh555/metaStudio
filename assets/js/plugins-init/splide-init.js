document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".team__splide")) {
    var teamSplide = new Splide(".team__splide", {
      perPage: 5,
      type: "loop",
      gap: "48px",
      padding: "5px",
      direction: "rtl",
      lazyLoad: "nearby",
      pagination: false,
      speed: 1000,
      autoplay: false,
      arrowPath:
        "M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM82.0607 13.0607C82.6464 12.4749 82.6464 11.5251 82.0607 10.9393L72.5147 1.3934C71.9289 0.807611 70.9792 0.807611 70.3934 1.3934C69.8076 1.97919 69.8076 2.92893 70.3934 3.51472L78.8787 12L70.3934 20.4853C69.8076 21.0711 69.8076 22.0208 70.3934 22.6066C70.9792 23.1924 71.9289 23.1924 72.5147 22.6066L82.0607 13.0607ZM2 13.5L81 13.5V10.5L2 10.5L2 13.5Z",
      classes: {
        prev: "splide__arrow--prev team__splide__prev",
        next: "splide__arrow--next team__splide__next",
      },
      breakpoints: {
        420: {
          perPage: 2,
          perMove: 2,
          gap: "14px",
          padding: "26px",
        },
        600: {
          perPage: 3,
          perMove: 3,
          gap: "14px",
          padding: "26px",
        },
        768: {
          perPage: 3,
          perMove: 3,
          gap: "24px",
          padding: "36px",
        },

        992: {
          perPage: 4,
          perMove: 4,
          gap: "36px",
          padding: "5px",
        },
        1180: {
          perPage: 5,
          perMove: 5,
          gap: "36px",
          padding: "5px",
        },
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
      breakpoints: {
        720: {
          perPage: 1,
          perMove: 1,
          // gap: "14px",
          // padding: "26px",
        },
        992: {
          perPage: 2,
          perMove: 2,
          gap: "25px",
          // padding: "26px",
        },
        // 768: {
        //   perPage: 2,
        //   // perMove: 3,
        //   // gap: "24px",
        //   // padding: "36px",
        // },

        1200: {
          gap: "25px",
          // padding: "5px",
        },
        // 1180: {
        //   perPage: 5,
        //   perMove: 5,
        //   gap: "36px",
        //   padding: "5px",
        // },
      },
    });
    commentSplide.mount();
  }

  if (document.querySelector(".portfolio__splide")) {
    var portfolioSplide = new Splide(".splide.portfolio__splide", {
      perPage: 4,
      perMove: 1,
      type: "slide",
      gap: "40px",
      focus: "center",
      padding: "20px",
      direction: "rtl",
      pagination: false,
      speed: 1000,
      autoPlay: false,
      arrows: false,
      breakpoints: {
        600: {
          perPage: 1,
          gap: "20px",
          padding: "40px",
          type: "loop",
        },
        800: {
          perPage: 2,
          gap: "20px",
          padding: "20px",
          type: "slide",
        },

        1000: {
          perPage: 3,
          gap: "20px",
          padding: "20px",
          type: "slide",
        },
        1180: {
          perPage: 4,
          gap: "20px",
          padding: "20px",
          type: "slide",
        },
      },
    }).mount();
  }

  if (document.querySelector(".services__splide")) {
    var servicesSplide = new Splide(".splide.services__splide", {
      perPage: 4,
      perMove: 1,
      type: "slide",
      gap: "32px",
      padding: { left: "20px", right: "20px" },
      direction: "rtl",
      pagination: false,
      speed: 1000,
      autoPlay: false,
      arrows: false,
      breakpoints: {
        600: {
          perPage: 1,
          gap: "24px",
          padding: { left: "64px", right: "20px" },
          // type: "loop",
        },
        860: {
          perPage: 2,
          gap: "24px",
          padding: { left: "64px", right: "20px" },
        },

        1140: {
          perPage: 3,
          gap: "24px",
          padding: { left: "64px", right: "20px" },
        },
      },
    }).mount();
  }

  if (document.querySelector(".best-templates__splide")) {
    var bestTemplatesSplide = new Splide(".splide.best-templates__splide", {
      perPage: 3,
      perMove: 1,
      type: "loop",
      autoHeight: true,
      gap: "35px",
      focus: 'center',
      padding: { left: "20px", right: "20px" },
      direction: "rtl",
      pagination: false,
      speed: 1000,
      autoPlay: false,
      arrows: false,
      breakpoints: {
        500: {
          perPage: 1,
          gap: "20px",
          padding: '40px',
          type: "loop",
        },
        860: {
          perPage: 2,
          gap: "20px",
          padding: {left: '20px', right: '20px'},
          type: 'loop'
        },

        1200: {
          perPage: 3,
          gap: "20px",
          padding: 0,
          type: 'slide',
          padding: {left: '20px', right: '20px'},
        },
      },
    }).mount();
  }
});

var swiper1 = new Swiper(".basic", {
  pagination: {
    el: ".sec4inner .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".sec4inner .swiper-button-next",
    prevEl: ".sec4inner .swiper-button-prev",
  },
});

var swiper2 = new Swiper(".basic2", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
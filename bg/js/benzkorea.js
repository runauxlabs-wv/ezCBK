var swiper1 = new Swiper(".basic", {
  pagination: {
    el: ".sec4_1inner .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".sec4_1inner .swiper-button-next",
    prevEl: ".sec4_1inner .swiper-button-prev",
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

var swiper3 = new Swiper(".basic3", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

$(function(){
  $(".sec4tab ul li").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
});
});
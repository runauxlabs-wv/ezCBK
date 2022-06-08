var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true, speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function() {
          if (this.realIndex == 4) {
              $(".s5inner video").get(0).play()
          } else {
            return
          }
      }
  }
  });
  var myswiper2 = new Swiper(".mySwiper2", {
    scrollbar: {
      el: ".mySwiper2 .swiper-scrollbar",
      hide: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });


  $(function() {
    $("#control a").click(function(){
        var num = Number($(this).text()) -1;
        $(this).addClass("on").siblings().removeClass("on");
        $("#pic > div").filter(":visible").stop(true).fadeOut(350).end()
                       .eq(num).stop(true).fadeIn(350);
        $(".s2button > a").eq(num).addClass("on").siblings().removeClass("on");
        

    });
        $("#control a:first").addClass("on").add("#pic > div:first").show();

});

$(document).ready(function() {
  $(".s5plus").hide();
  $("button:eq(0)").click(function() {
    $(".s5plus").fadeIn();
});
  $(".close").click(function(){
    $(".s5plus").fadeOut();
  })
});
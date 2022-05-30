var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  $(function() {
    $("#control a").click(function(){
        var num = Number($(this).text()) -1;
        $(this).addClass("on").siblings().removeClass("on");
        $("#pic > div").filter(":visible").stop(true).fadeOut(350).end()
                       .eq(num).stop(true).fadeIn(350);

    });
        $("#control a:first").addClass("on").add("#pic > div:first").show();

});
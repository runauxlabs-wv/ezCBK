$(function () {
    $("#control a").click(function () {
        var num = Number($(this).index());
        $(this).addClass("on").siblings().removeClass("on");
        $("#pic > div").filter(":visible").stop(true).fadeOut().end()
          .eq(num).stop(true).fadeIn();    
      });

      $("#control2 a").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    });

    $(".box4plus").hide();
    $(".yes").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
      $(".box4plus").slideDown();
    });
    $(".no").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
      $(".box4plus").slideUp();
    });
    
    $(".box5plus").hide();
    $(".yes2").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
      $(".box5plus").fadeIn();
    });
    $(".close").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
      $(".box5plus").fadeOut();
    });



});
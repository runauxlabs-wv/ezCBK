$(function () {
    $("#control a").click(function () {
        var num = Number($(this).index());
        var colum = $(".rightbox2").offset().top -50
        $(this).addClass("on").siblings().removeClass("on");
        $("#pic > div").filter(":visible").stop(true).fadeOut().end()
          .eq(num).stop(true).fadeIn();
          $("html, body").animate({
            scrollTop: colum
        }, 500);
      });

      $("#control2 a").click(function () {
        var colum2 = $(".rightbox3").offset().top -50
        $(this).addClass("on").siblings().removeClass("on");
        $("html, body").animate({
          scrollTop: colum2
      }, 500);
    });

    $(".box4plus").hide();
    $(".yes").click(function () {
      var colum3 = $(".yes").offset().top -130
    $(this).addClass("on").siblings().removeClass("on");
      $(".box4plus").slideDown();
      $("html, body").animate({
        scrollTop: colum3
    }, 500);
    });
    $(".no").click(function () {
      var colum4 = $(".no").offset().top -130
        $(this).addClass("on").siblings().removeClass("on");
      $(".box4plus").slideUp();
      $("html, body").animate({
        scrollTop: colum4
    }, 500);
    });
    $(".no3").click(function () {
      $(".no").addClass("on").siblings().removeClass("on");
    $(".box4plus").slideUp();
  });
    
    $(".yes3").click(function () {
      $(this).addClass("on").siblings().removeClass("on");
    });

    $(".box5plus").hide();
    $("#control5 > a").eq(0).click(function () {
      var colum5 = $(".yes2").offset().top -207
    $(this).addClass("on").siblings().removeClass("on");
      $("html, body").animate({
        scrollTop: colum5
    }, 500);
    });
    $("#control5 > a").eq(1).click(function () {
      var colum5 = $(".yes2").offset().top -210
    $(this).addClass("on").siblings().removeClass("on");
      $(".box5plus").fadeIn();
      $("html, body").animate({
        scrollTop: colum5
    }, 500);
    });
    $(".plusboxtextbox2").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
      $(".box5plus").fadeOut();
    });
    $(".close").click(function () {
      $(".no2").addClass("on").siblings().removeClass("on");
    $(".box5plus").fadeOut();
  });

const clock = document.getElementById("clock");

function getClock(){
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth()+1;
  const date = now.getDate()+2;
  clock.innerText = `${year}/${month}/${date} ${'무료배송'}`;
}
getClock();
setInterval(getClock, 1000);


$(".mnav").hide();
$(".head button").click(function () {
  $(".mnav").slideToggle();
  $(this).children().text(function (e, text) {
    return text === 'close' ? 'apps' : 'close'
  });
});

});
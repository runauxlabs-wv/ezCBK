var swiper = new Swiper(".basic", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    keyboard: {enabled: true,},
    mousewheel: true, speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function() {
          if (this.realIndex == 4) {
              $(".s5inner video").get(0).play();
              $('.counting').text('999');
              $(".swiper").removeClass('white');
          }
          else if (this.realIndex == 0) {
            $(".swiper").removeClass('white');
        }
        else if (this.realIndex == 1) {
          $(".swiper").removeClass('white');
      }
          else if (this.realIndex == 2) {
            $(".swiper").removeClass('white');
        }
        else if (this.realIndex == 3) {
          $(".swiper").addClass('white');
      }
          else if (this.realIndex == 5) {
            counting();
            $(".swiper").addClass('white');
        }
          else if (this.realIndex == 6) {
            $(".s6 video").get(0).play();
            $('.counting').text('999');
            $(".swiper").removeClass('white');
        }
           else {
             $('.counting').text('999');
            return
            // $(".s5inner video").get(0).stop();
          };
        // $(".s5inner video").get(0).play();
        // $(".s6inner video").get(0).play();
      },
      reachEnd: function() {
        swiper.mousewheel.disable();
        $('footer').addClass('on');
    }
  },
  });
  window.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
        swiper.mousewheel.enable();
        $('footer').removeClass('on');

    }else if(event.deltaY > 0){
        return false
    }
});

  window.addEventListener('resize' , () => {
    let iw = window.innerWidth;
    if (iw < 750) {
      $('.s1img').attr("src", "../img/pjB/s1imgm.png")
    }
    else if (iw > 750){
      $('.s1img').attr("src", "../img/pjB/s1img.png")

    }
  });



  var myswiper2 = new Swiper(".basic2", {
    scrollbar: {
      el: ".basic2 .swiper-scrollbar",
      hide: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });


  $(function() {
    let iw = window.innerWidth;
    if (iw < 750) {
      $('.s1img').attr("src", "../img/pjB/s1imgm.png")
    }
    else if (iw > 750){
      $('.s1img').attr("src", "../img/pjB/s1img.png")

    }
    $("#control a").click(function(){
        var num = Number($(this).text()) -1;
        $(this).addClass("on").siblings().removeClass("on");
        $("#pic > div").filter(":visible").stop(true).fadeOut(350).end()
                       .eq(num).stop(true).fadeIn(350);
        $(".s2button > a").eq(num).addClass("on").siblings().removeClass("on");
        

    });
        $("#control a:first").addClass("on").add("#pic > div:first").show();




  $(".s4plus").hide();
  $(".s4 button").click(function() {
    $(".s4plus").fadeIn();
});
  $(".close3").click(function(){
    $(".s4plus").fadeOut();
  })


  
  $(".s5plus").hide();
  $(".plusbox button").click(function() {
    $(".s5plus").fadeIn();
});
// $(".s5leftboxm button").click(function() {
//   $(".s5plus").fadeIn();
// });
  $(".close").click(function(){
    $(".s5plus").fadeOut();
  })
});


$(document).ready(function() {
  $(".s6plus").hide();
  $(".plusbox2 button").click(function() {
    $(".s6plus").slideToggle();
});
  $(".close2").click(function(){
    $(".s6plus").slideToggle();
  })


  $(".mnav").hide();
  $(".head button").click(function() {
    $(".mnav").slideToggle();
    $(this).children().text(function(e, text) {
      return text === 'close' ? 'apps' : 'close'
  });
});
});


function counting() {
  $('.counting').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({
          countNum: $this.text()
      }).animate({
          countNum: countTo
      }, {
          duration: 1500,
          easing: 'linear',
          step: function() {
              $this.text(Math.floor(this.countNum));
          },
          complete: function() {
              $this.text(this.countNum);
          }
      });
  });
}
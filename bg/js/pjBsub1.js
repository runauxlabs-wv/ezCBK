window.addEventListener('resize' , () => {
    let iw = window.innerWidth;
    if (iw < 551) {
      $('.s1 img').css("transform", "scale(0.8)")
    }
    else if (iw > 750){
        $('.s1 img').css("transform", "scale(1)")

    }
  });


  $(function() {
    $(".box1plus").hide();
    $(".sec2box1").click(function() {
      $(".box1plus").fadeIn();
  });
    $(".close").click(function(event){
      $(".box1plus").fadeOut();
      event.stopPropagation();
    })


    $(".box2plus").hide();
    $(".sec3box1").click(function() {
      $(".box2plus").fadeIn();
  });
    $(".close2").click(function(event){
      $(".box2plus").fadeOut();
      event.stopPropagation();
    })


    $(".box3plus").hide();
    $(".sec3box2").click(function() {
      $(".box3plus").fadeIn();
  });
    $(".close3").click(function(){
      $(".box3plus").fadeOut(event);
      event.stopPropagation();
    })


    $(".box4plus").hide();
    $(".sec4leftbox1").click(function() {
      $(".box4plus").fadeIn();
  });
    $(".close4").click(function(event){
      $(".box4plus").fadeOut();
      event.stopPropagation();
    })

    $(".box5plus").hide();
    $(".sec4leftbox2").click(function() {
      $(".box5plus").fadeIn();
  });
    $(".close5").click(function(event){
      $(".box5plus").fadeOut();
      event.stopPropagation();
    })


    $(".box6plus").hide();
    $(".sec4right").click(function() {
      $(".box6plus").fadeIn();
  });
    $(".close6").click(function(event){
      $(".box6plus").fadeOut();
      event.stopPropagation();
    })
  });

  
$(document).ready(function () {
  $(".s6plus").hide();
  $(".plusbox2 button").click(function () {
    $(".s6plus").slideToggle();
  });
  $(".close2").click(function () {
    $(".s6plus").slideToggle();
  })


  $(".mnav").hide();
  $(".head button").click(function () {
    $(".mnav").slideToggle();
    $(this).children().text(function (e, text) {
      return text === 'close' ? 'apps' : 'close'
    });
  });
});
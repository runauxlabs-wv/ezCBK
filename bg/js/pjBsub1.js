window.addEventListener('resize' , () => {
    let ih = window.innerHeight;
    if (ih < 871) {
      $('.sec1 img').css("transform", "scale(0.7)")
    }
    else if (ih > 870){
        $('.sec1 img').css("transform", "scale(1)")

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
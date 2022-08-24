var s = skrollr.init();

$(".nav2plus").hide();
$(".nav2").click(function () {
  $(".nav2plus").slideToggle();
  $(this).children().text(function (e, text) {
    return text === 'close' ? 'menu' : 'close'
  });
});

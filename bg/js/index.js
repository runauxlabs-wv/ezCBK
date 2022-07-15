const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const title = document.getElementById('title');
const name = document.getElementById('name');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    title.classList.toggle('active');
    name.classList.toggle('active');
}
function counting() {
    $('.counting').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: 2000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      });
    });
  }
  $(document).scroll(function() {
  var scrolltop = $(window).scrollTop();
  if (scrolltop >= 800) {
    counting();
    $(".line, .line2, .line3, .line4, .line5, .line6").addClass("gauge");
}
});

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "power1", duration: 4 });
tl.from(".sec4", { xPercent: 100 })
.from(".sec5", { xPercent: 100 })
    .from(".sec6", { yPercent: 100 });
    ScrollTrigger.create({
        animation: tl, // 애니메이션 변수
        trigger: ".warp", // 동작 요소
        markers: true, // 인디케이터표시, 기준점
        start: "top top", // 시작 지점 선택, 화면 상단에 해당요소의 상단이 닿을때
        end: "+=4000", // 종료지점, 시작지점으로부터 4000px이후  
        pin: true, // 화면고정여부, true/false, 요소의 class/id 사용가능
        scrub: 3, // 스크롤 여부에 따라 애니메이션 되감기 기능, true/false, 숫자 사용가능
        anticipatePin: 0 // 기본값 0, 애니메이션이 동작되는 패널을 얼마나 빨리 고정하느냐
    });
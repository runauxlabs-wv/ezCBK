gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "power1", duration: 4 });
const tl = gsap.timeline();
tl  .from(".sec03", { xPercent: 100 })
    .from(".sec05", { yPercent: 100 });
    ScrollTrigger.create({
        animation: tl, // 애니메이션 변수
        trigger: ".wrap", // 동작 요소
        markers: false, // 인디케이터표시, 기준점
        start: "top top", // 시작 지점 선택, 화면 상단에 해당요소의 상단이 닿을때
        end: "+=4000", // 종료지점, 시작지점으로부터 4000px이후  
        pin: true, // 화면고정여부, true/false, 요소의 class/id 사용가능
        scrub: 3, // 스크롤 여부에 따라 애니메이션 되감기 기능, true/false, 숫자 사용가능
        anticipatePin: 0 // 기본값 0, 애니메이션이 동작되는 패널을 얼마나 빨리 고정하느냐
    });

    const body = document.querySelector('body');
    const toggle = document.getElementById('toggle');
    const title = document.getElementById('title');
    const name = document.getElementById('name');
    const waves = document.getElementById('waves');
    toggle.onclick = function(){
        toggle.classList.toggle('active');
        body.classList.toggle('active');
        title.classList.toggle('active');
        name.classList.toggle('active');
        waves.classList.toggle('active');
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

    $(function () {
      if (window.innerWidth <= 640) {
        $('.secstart').removeClass('s01');
      } else {
        $('.s01').vegas({
          slides: [
            { src: "../img/index/vega1.png", delay: 3500 },
            { src: "../img/index/vega2.png", delay: 3500 },
            { src: "../img/index/vega3.png", delay: 3500 },
            { src: "../img/index/vega4.png", delay: 3500 },
            { src: "../img/index/vega5.png", delay: 3500 },
          ],//슬라이드는 배열로, 각자 객체로 입력
          overlay: '../lib/vegas/overlays/05.png', //망점효과
          animation: ['kenburnsDownLeft', 'kenburnsUpLeft', 'kenburnsUp'],
          //효과 배열로 매칭
          // animation: 'random', //효과랜덤
        });
      }
    });
    
    $(function () {
      if (window.innerWidth <= 640) {
        $('.sec03').removeClass('s02');
      } else {
        $('.s02').vegas({
          slides: [
            { src: "../img/index/vega2_1.png", delay: 3500 },
            { src: "../img/index/vega2_2.png", delay: 3500 },
            { src: "../img/index/vega2_3.png", delay: 3500 },
            { src: "../img/index/vega2_4.png", delay: 3500 },
            { src: "../img/index/vega2_5.png", delay: 3500 },
          ],//슬라이드는 배열로, 각자 객체로 입력
          overlay: '../lib/vegas/overlays/05.png', //망점효과
          animation: ['kenburnsDownLeft', 'kenburnsUpLeft', 'kenburnsUp'],
          //효과 배열로 매칭
          // animation: 'random', //효과랜덤
        });
      }
    });

    //모바일에서 베가스는 동영상을 지원하지 않음
    $.vegas.isVideoCompatible = function () {
      var devices = /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i;
      return !devices.test(navigator.userAgent);
    }


const position = document.documentElement;
position.addEventListener("mousemove", e => {
  position.style.setProperty('--x', e.clientX + 'px');
})
    










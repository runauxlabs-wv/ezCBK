
$(document).ready(function(){
	$(window).on("resize", function(){
		var window_w = $(window).innerWidth();
		if (window_w > 1200) {
			// gnb
			$('#gnb > ul > li > a').on('mouseover focusin', function(){
				$('.gnb_wrap').addClass('on');
				$(this).parent('li').addClass('on').siblings().removeClass('on');
			})
			$('#gnb').on('mouseleave', function(){
				$('.gnb_wrap, #gnb > ul > li').removeClass('on');
			})
			$('.sitemap a, #content').on('mouseover focusin', function(){
				$('.gnb_wrap, #gnb > ul > li').removeClass('on');
			})
		} else {
			$('#gnb, #gnb > ul > li > a, .sitemap a, #content').off('mouseleave mouseover focusin');
			$('#gnb > ul > li > a').on('click', function() {
				$(this).parent('li').addClass('on').siblings().removeClass('on');
			})
		}
	}).resize();
	// m search
	$('.btn_m_srch').on('click',function(){
		$('#header .btn_wrap').toggleClass('on');
	})
	// m menu
	$('.btn_m_menu').on('click',function(){
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
	})
	$('.btn_m_close').on('click',function(){
		$('html, body').css({'overflow': 'visible', 'height': 'auto'});
	})
	// idx popup
	$('.pop_cont').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		appendDots: $(".pop_wrap .pop_dots"),
		prevArrow : "<button type='button' class='pop_prev'>이전으로</button>",
		nextArrow : "<button type='button' class='pop_next'>다음으로</button>",
		customPaging: function(slick,index) {
			return '<a>' + '</a>';
		}
	})
	// tv popup
	$('.arisu_tv').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		appendDots: $(".sns_wrap .pop_dots"),
		prevArrow: $(".sns_wrap .pop_prev"),
		nextArrow: $(".sns_wrap .pop_next"),
		customPaging: function(slick,index) {
			return '<a>' + '</a>';
		}
	})
	// brd
	$('.brd_wrap button').on('click',function(){
		$('.brd_wrap button').removeAttr('title');
		$(this).attr('title','선택됨').parent('li').addClass('on').siblings().removeClass('on');
	})
})
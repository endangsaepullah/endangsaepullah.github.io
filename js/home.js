$('.login-button, .login-martabak').click(function(){
	$('.overlay').show();
	$('.login-pop-up').fadeIn(300);
});

$('.close, .overlay').click(function(){
	$('.overlay').hide();
	$('.login-pop-up').hide();
	$('.tnc-pop-up').hide();
});

if ($(window).width() > 800){
	$('#landing').css('min-height',$(window).height()-90+'px');
}

if ($(window).innerHeight() < 700 && $(window).width() > 800){
	$('#how-to').css('width','400px');
	$('#how-to').css('margin-left','-200px');
	$('#how-to').css('margin-top','-195px');
}

$.fn.nextOrFirst = function(selector){
	var next = this.next(selector);
	return (next.length)?next:this.prevAll(selector).last();
};

$.fn.prevOrLast = function(selector){
	var prev = this.prev(selector);
	return (prev.length)?prev:this.nextAll(selector).last();
};

$(document).ready(function(){
	$('#comic-slide').slidesjs({
	    width: 588,
	    height: 364,
	    play: {
	      effect: "slide",
	      interval: 3000,
	      auto: true,
	    },

	    pagination: {
	      active: true,
	      effect: "slide"
	    },

	    callback: {
	      complete: function(number){
	      	var number = number;
	        showSliderDesc(number);
	      }
	    }
	});
});

function showSliderDesc(numb){
	$("#slider-desc ul li").removeClass("show");
	$("#slider-desc ul li:nth-child("+numb+")").addClass("show");
}

/*
$(".arrow-right").click(function(){
	$("#slider ul").find(".show").toggleClass("show").nextOrFirst("li").toggleClass("show");
	$("#slider-desc ul").find(".show").toggleClass("show").nextOrFirst("li").toggleClass("show");
	$("#bullets").find(".active2").toggleClass("active2").nextOrFirst("li").toggleClass("active2");
});

$(".arrow-left").click(function(){
	$("#slider ul").find(".show").toggleClass("show").prevOrLast("li").toggleClass("show");
	$("#slider-desc ul").find(".show").toggleClass("show").prevOrLast("li").toggleClass("show");
	$("#bullets").find(".active2").toggleClass("active2").prevOrLast("li").toggleClass("active2");
});

$('#bullets').children('li').click(function(){
	var index2 = $(this).index();

	$("#slider>ul>li.show").removeClass("show");
	$("#slider-desc>ul>li.show").removeClass("show");
	$("#bullets>li.active2").removeClass("active2");

	$("#slider>ul>li").eq(index2).addClass("show");
	$("#slider-desc>ul>li").eq(index2).addClass("show");
	$("#bullets>li").eq(index2).addClass("active2");
});
*/

$('.tnc').click(function(){
	$('.overlay').show();
	$('.tnc-pop-up').fadeIn(300);
	is_popUp = true;
})

var is_bottom = false;

$(function () {
	var $win = $(window);

	$win.scroll(function () {
		if ($win.height() + $win.scrollTop() == $(document).height()) {
			if (!is_bottom){
				ga('send', 'pageview', '/tentang-jon');
				is_bottom = true;
			}
		}
	});
});

$('#forget-pass').click(function(){
	$('.login-pop-up').hide();
	$('.tnc-pop-up').fadeIn(300);
});

window.addEventListener?window.addEventListener('scroll', testScroll, false):window.attachEvent('onScroll', testScroll);
 
var scrollCount = 0;
 
function testScroll() {
	++scrollCount;
	if (scrollCount == 1) {
		ga('send', 'event', 'NoBounce', 'Scrolled the page');
	}
}

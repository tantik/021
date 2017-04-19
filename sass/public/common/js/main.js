$(document).ready(initPage);
function initPage(){
	ininPagetop();
	mobileMenu();
	swiperGallery();
}
var allGallery = {}
function swiperGallery(){
	allGallery.swiperTop = new Swiper('.swiper-top .swiper-container', {
		nextButton: '.swiper-top .swiper-button-next',
		prevButton: '.swiper-top .swiper-button-prev',
		slidesPerView: 3,
		spaceBetween: 10,
		autoplay: 2500,
		autoplayDisableOnInteraction: false,
		loop: true,
		breakpoints: {
			736: {
				slidesPerView: 2,
				spaceBetween: 5
			}
		}
	});
}
function ininPagetop() {
	$(".link-to-top").hide();
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 100) {
			$('.link-to-top').fadeIn();
		} else {
			$('.link-to-top').fadeOut();
		}
		scrollHeight = $(document).height();
		scrollPosition = $(window).height() + $(window).scrollTop();
		footHeight = $("footer").innerHeight();
		if ( scrollHeight - scrollPosition  <= footHeight ) {
			$(".link-to-top").css({
				"position":"absolute",
				"right":"25px",
				"bottom": footHeight + 20
			});
		} else {
			$(".link-to-top").css({
				"position":"fixed",
				"bottom": "40px",
				"right": "25px"
			});
		}

	});
	$('.link-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
};
/* Mobile Menu */
function mobileMenu(){
	$('a.mobile-opener').click(function(e) {
		e.preventDefault();
		$('body').toggleClass('nav-visible');
		$('.nav').slideToggle(300);
	});
	if ($(window).width() <= 736) {
		$('.nav a').click(function(e) {
			$('body').removeClass('nav-visible');
			$('.nav').slideUp(300);
		});
	}
	$('a.cloze-nav').click(function(e) {
		e.preventDefault();
		$('body').removeClass('nav-visible');
		$('.nav').slideUp(300);
	});
}
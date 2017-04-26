$(window).resize(function() {
	positionPopup();
});

$(document).ready(initPage);
function initPage(){
	ininPagetop();
	mobileMenu();
	initPopup();
	swiperGallery();
	initLink();
	setTimeout(OnScroll,300);
}

if(window.location.hash){
	window.hash = window.location.hash.substr(1);
	window.location.hash = '';
}

function OnScroll() {
	if (window.hash) {
		var minus = $('#header').height();
		var scrollPos = $('#'+window.hash).offset().top ;
		$("html, body").animate({ scrollTop: scrollPos - minus }, 1000);
	}
};

function initLink(){
	$('.anhor-link').click(function(e){
		e.preventDefault();
		var minus = $('#header').height();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - minus;
		$('body,html').animate({scrollTop: top}, 1500);
	});
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


/* Popup initiation */
function initPopup() {
	$('a[data-popup]').click(function(e) {
		$('.popup').removeClass('visible');
		e.preventDefault();
		var id = $(this).attr('data-popup');
		var maskHeight = $(document).height();
		$('.fader').css({'height':maskHeight});
		$('.fader').addClass('visible');
		$('#' + id).addClass('visible');
		positionPopup();
		if($('#' + id).height() >= $(window).height()){
			$('#' + id).css({
				top: $(window).scrollTop(),
			});
		} else {
			$('#' + id).css({
				top: $(window).scrollTop()+ $(window).height()/2,
				marginTop: -$('#' + id).height()/2
			});
		}

	});

	$('.popup-close').click(function (e) {
		e.preventDefault();
		$('.fader').removeClass('visible');
		$('.popup').removeClass('visible');
	});
	$('.fader').click(function () {
		$(this).removeClass('visible');
		$('.popup').removeClass('visible');
	});
}
/* Popup position */
function positionPopup(){
	if($('.popup.visible').width() < $(document).width()){
		$('.popup.visible').css({
			'marginLeft': -($('.popup.visible').width())/2,
			'left': '50%'
		});
	}
	else{
		$('.popup.visible').css({
			'marginLeft': 0,
			'left': 0
		});
	}
}
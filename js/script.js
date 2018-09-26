//scrol plugin start
$(".main").tiltedpage_scroll({
	sectionContainer: "> section", // In case you don't want to use <section> tag, you can define your won CSS selector here
	angle: 50, // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
	opacity: true, // You can toggle the opacity effect with this option. The default value is true
	scale: true, // You can toggle the scaling effect here as well. The default value is true.
	outAnimation: true // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
});

//scrol plugin end
jQuery(document).ready(function ($) {
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});
});

//counter plugin start

//animation start
$(document).ready(function () {
	$(".animsition").animsition({
		inClass: 'rotate-in-sm',
		outClass: 'rotate-out-sm',
		inDuration: 1500,
		outDuration: 800,
		linkElement: '.animsition-link',
		// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
		loading: true,
		loadingParentElement: 'body', //animsition wrapper element
		loadingClass: 'animsition-loading',
		loadingInner: '', // e.g '<img src="loading.svg" />'
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: ['animation-duration', '-webkit-animation-duration'],
		// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		overlay: false,
		overlayClass: 'animsition-overlay-slide',
		overlayParentElement: 'body',
		transition: function (url) {
			window.location.href = url;
		}
	});
});
//animation end


//wow animate start
new WOW().init();
var wow = new WOW({
	boxClass: 'wow', // animated element css class (default is wow)
	animateClass: 'animated', // animation css class (default is animated)
	offset: 0, // distance to the element when triggering the animation (default is 0)
	mobile: true, // trigger animations on mobile devices (default is true)
	live: true, // act on asynchronously loaded content (default is true)
	callback: function (box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	},
	scrollContainer: null, // optional scroll container selector, otherwise use window,
	resetAnimation: true, // reset animation on end (default is true)
});
wow.init();
//wow animate end


//paralax start
$('.parallax-window').parallax({
	naturalWidth: 600,
	naturalHeight: 400
});
//paralax end

//slick slider start
$(document).on('ready', function () {
	$(".vertical-center-4").slick({
		dots: true,
		vertical: true,
		centerMode: true,
		slidesToShow: 4,
		slidesToScroll: 2
	});

});
$(document).ready(function () {
	$('.slider-sec').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
	});



	$('.center').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
    },
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
    }
  ]
	});


	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});

	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});
});
//slick slider end

//owl carosal start
var owl = $('.owl-carousel');
owl.owlCarousel({
	items: 4,
	loop: true,
	margin: 10,
	autoplay: true,
	autoplayTimeout: 1000,
	autoplayHoverPause: true
});
$('.play').on('click', function () {
	owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
	owl.trigger('stop.owl.autoplay')
})
//owl carosal end



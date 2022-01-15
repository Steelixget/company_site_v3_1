const windowInnerWidth = document.documentElement.clientWidth
console.log(windowInnerWidth);
$(document).ready(function () {
	$('.header__slider').slick({
		arrows: false,
		dots: false,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,

	});
});

$(document).ready(function () {
	$('.specialoffers__slider').slick({
		arrows: true,
		dots: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,

	});
});

$(document).ready(function () {
	$('.reviews__slider').slick({
		arrows: true,
		dots: false,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		slidesToShow: 2,
	});
});
if (document.documentElement.clientWidth > 920) {
	if (document.documentElement.clientWidth < 1300) {
		$(document).ready(function () {
			$('.partners__slider').slick({
				arrows: true,
				dots: false,
				speed: 1000,
				autoplay: true,
				autoplaySpeed: 5000,
				pauseOnHover: true,
				slidesToShow: 3,
			});
		});
	} else {
		$(document).ready(function () {
			$('.partners__slider').slick({
				arrows: true,
				dots: false,
				speed: 1000,
				autoplay: true,
				autoplaySpeed: 5000,
				pauseOnHover: true,
				slidesToShow: 4,
			});
		});
	};
} else{
	if (document.documentElement.clientWidth > 767) {
		$(document).ready(function () {
			$('.partners__slider').slick({
				arrows: true,
				dots: false,
				speed: 1000,
				autoplay: true,
				autoplaySpeed: 5000,
				pauseOnHover: true,
				slidesToShow: 2,
			});
		});
	} else {
		$(document).ready(function () {
			$('.partners__slider').slick({
				arrows: true,
				dots: false,
				speed: 1000,
				autoplay: true,
				autoplaySpeed: 5000,
				pauseOnHover: true,
				slidesToShow: 1,
			});
		});
	};
};





window.onload = function () {
	var focus = document.querySelector('.focus');
	focus.onmouseout = function (e) {
		document.getElementById('focus').style.display = 'none';

	}

	focus.onmouseover = function (e) {
		document.getElementById('focus').style.display = 'block';

		var element = document.getElementById("focus");
		element.classList.add("active");
	};

}

$(function () {
	$('.footer__app').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 2000);
	})
})
//! animation
window.addEventListener('scroll', function() {

   var someDiv = document.getElementById('scroll');
	const windowInnerHeight = window.innerHeight;
   //  console.log(distanceToTop);
	//  console.log(windowInnerHeight);
 
	var rect = someDiv.getBoundingClientRect();
// console.log(rect.top);
if(rect.top <= windowInnerHeight-100){
	someDiv.classList.add("animate__animated");
	someDiv.classList.add("animate__backInRight");
}
});


window.addEventListener('scroll', function() {

   var someDiv = document.getElementById('scroll2');
	const windowInnerHeight = window.innerHeight;
   //  console.log(distanceToTop);
	//  console.log(windowInnerHeight);
 
	var rect = someDiv.getBoundingClientRect();
// console.log(rect.top);
if(rect.top <= windowInnerHeight-100){
	someDiv.classList.add("animate__animated");
	someDiv.classList.add("animate__fadeInLeft");
}
});
window.addEventListener('scroll', function() {

   var someDiv = document.getElementById('scroll3');
	const windowInnerHeight = window.innerHeight;
   //  console.log(distanceToTop);
	//  console.log(windowInnerHeight);
 
	var rect = someDiv.getBoundingClientRect();
// console.log(rect.top);
if(rect.top <= windowInnerHeight-100){
	someDiv.classList.add("animate__animated");
	someDiv.classList.add("animate__backInUp");
}
});
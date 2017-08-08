$(document).foundation()
jQuery(document).ready(function($) {

	var menuLink = $('.main-nav ul li a');
	var page = $('.page');
	var menuBtn = $('.menu-button');
	var mobileNav = $('.mobile-menu');
	var mNavCancel = $('.close-wrap img');

	page.css('visibility', 'hidden');

	$('#home').addClass('slideInUp').css('visibility', 'visible');
	menuLink.on('click', function(event) {
		event.preventDefault();
		var linkRef = $(this).attr('href');

		menuLink.parent('li').removeClass('active-line');
		$(this).parent('li').addClass('active-line');

		page.removeClass('slideInUp').addClass('slideOutDown');
		$(linkRef).removeClass('slideOutDown').addClass('slideInUp').css('visibility', 'visible');
	});


	menuBtn.on('click', function(event) {
		event.preventDefault();
		mobileNav.removeClass('slideLeftOut').addClass('slideLeftIn').css('visibility', 'visible');

	});
	mNavCancel.on('click', function(event) {
		event.preventDefault();
		mobileNav.removeClass('slideLeftIn').addClass('slideLeftOut');
	});		mobileItem = $('.mobile-menu li a ');
	mobileItem.on('click', function(event) {
		event.preventDefault();
		mobileNav.removeClass('slideLeftIn').addClass('slideLeftOut');
	});

	mobileItem = $('.mobile-menu li a ');
	mobileItem.on('click', function(event) {
		event.preventDefault();
		mobileNav.removeClass('slideLeftIn').addClass('slideLeftOut');
	});
});

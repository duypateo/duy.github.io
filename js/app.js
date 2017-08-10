$(document).foundation()
jQuery(document).ready(function($) {

	var menuLink = $('.main-nav ul li a');
	var page = $('.page');
	var menuBtn = $('.mobile-btn');
	var mobileNav = $('.core-menu');
	var mNavCancel = $('.active');
	page.css('visibility', 'hidden');
	// TOGGLE PAGE
	$('#home').addClass('slideInUp').css('visibility', 'visible');
	menuLink.on('click', function(event) {
		event.preventDefault();
		var linkRef = $(this).attr('href');
		menuLink.parent('li').removeClass('active-line');
		$(this).parent('li').addClass('active-line');
		page.removeClass('slideInUp').addClass('slideOutDown');
		$(linkRef).removeClass('slideOutDown').addClass('slideInUp').css('visibility', 'visible');
	});
	// TOGGLE MOBILE MENU
	menuBtn.on('click', function(event) {
		event.preventDefault();
		if(!$(this).hasClass('active')){
			mobileNav.removeClass('slideLeftOut').addClass('slideLeftIn').css('visibility', 'visible');
			$(this).addClass('active');
		}else{
			mobileNav.removeClass('slideLeftIn').addClass('slideLeftOut');
			$(this).removeClass('active');
		}
	});
	// WINDOW RESIZE
	$(window).resize(function(event) {
		if(mobileNav.css('visibility')=='hidden'){
			console.log('ok');
			mobileNav.css('visibility','visible');
		}
		if(mobileNav.hasClass('slideLeftOut')){
			mobileNav.removeClass('slideLeftOut');
		}
	});
});

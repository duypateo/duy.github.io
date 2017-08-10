$(document).foundation()
jQuery(document).ready(function($) {

	var menuLink = $('.main-nav ul li a');
	var page = $('.page');
	var menuBtn = $('.mobile-btn');
	var mobileNav = $('.core-menu');
	var mNavCancel = $('.active');
	page.css('visibility', 'hidden');
	function hide_menu(){
		mobileNav.removeClass('slideLeftIn').addClass('slideLeftOut');
		menuBtn.removeClass('active');
	}
	function open_menu(){
		mobileNav.removeClass('slideLeftOut').addClass('slideLeftIn').css('visibility', 'visible');
		menuBtn.addClass('active');
		console.log('ok');
	}
	$('#home').addClass('slideInUp').css('visibility', 'visible');
	// TOGGLE PAGE
	menuLink.on('click', function(event) {
		event.preventDefault();
		var linkRef = $(this).attr('href');
		menuLink.parent('li').removeClass('active-line');
		$(this).parent('li').addClass('active-line');
		page.removeClass('slideInUp').addClass('slideOutDown');
		$(linkRef).removeClass('slideOutDown').addClass('slideInUp').css('visibility', 'visible');
		hide_menu();
	});
	// TOGGLE MOBILE MENU
	menuBtn.on('click', function(event) {
		event.preventDefault();
		if(!$(this).hasClass('active')){
			open_menu();
		}else{
			hide_menu();
		}
	});
});

$(document).foundation();
jQuery(window).load(function() {
  setTimeout(function(){
    $(".loading-waiter").fadeOut();
  },100);
})
var TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};
TxtType.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
	var that = this;
	var delta = 200 - Math.random() * 100;
	if (this.isDeleting) { delta /= 2; }
	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}
	setTimeout(function() {
		that.tick();
	}, delta);
};
window.onload = function() {
	var elements = document.getElementsByClassName('typewrite');
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 2px solid #fff; color: #888;}";
	document.body.appendChild(css);
};
jQuery(document).ready(function($) {
	var menuLink = $('.main-nav ul li a').not('#down_cv');
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

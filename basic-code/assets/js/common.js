jQuery(document).ready(function(){

	var winWidth =  jQuery(window).width();


	// menu style start

	function mobileMenuCollapse() {
		
		jQuery('#nav-icon1').click(function(){
			jQuery('.cc-menu').toggleClass('menu-visible')
			jQuery(this).toggleClass('open');
		});

		jQuery('.cc-menu > nav > ul > li  ul ').addClass('cc-submenu');
		jQuery('.cc-menu > nav > ul > li  ul ').parent().addClass('cc-has-submenu');
	
		jQuery('.cc-has-submenu').click(function(ev){
			ev.preventDefault();
			ev.stopPropagation();
			jQuery(this).find('ul.cc-submenu:eq(0)').slideToggle();
			jQuery(this).toggleClass('cc-rotate-icon')
		})

		jQuery('nav ul li a').click(function(ev){
			window.location = jQuery(this).attr('href') ;
		})
	}


	if(winWidth <= 1023) {
		mobileMenuCollapse()
	}


});

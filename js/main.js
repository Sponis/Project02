jQuery(document).ready(function(){

	jQuery('#mainmenu li').on('click',function(){
		if (jQuery(this).hasClass("IsOpen")) {
			jQuery(this).removeClass("IsOpen");
			jQuery(this).find('.submenu').hide(500);
		}
		else {
			jQuery('#mainmenu li .submenu').hide();
			jQuery('#mainmenu li').removeClass("IsOpen");
			jQuery(this).toggleClass("IsOpen");
			jQuery(this).find('.submenu').show(500);
		}
	});







});

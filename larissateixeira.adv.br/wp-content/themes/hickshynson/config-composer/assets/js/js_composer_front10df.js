
jQuery( document ).ready(function() {
	if( jQuery('html').attr('dir') == 'rtl' ){
		jQuery('[data-vc-full-width="true"]').each( function(i,v) {
			jQuery(this).css('right' , jQuery(this).css('left') ).css( 'left' , 'auto');
		});
	}
});
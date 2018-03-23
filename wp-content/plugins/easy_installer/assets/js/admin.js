jQuery(document).ready(function ($) {

	var show_style_variant = function(style_name){
        jQuery('#import-niche').hide(); // Default Hide
        jQuery('#import-creative').hide(); // Default Hide
        jQuery('#import-portfolio').hide(); // Default Hide
        jQuery('#import-hero').hide(); // Default Hide
        jQuery('#import-shop').hide(); // Default Hide
        jQuery('#import-magazine').hide(); // Default Hide
        jQuery('#import-onepage').hide(); // Default Hide
        jQuery('#import-corporate').hide(); // Default Hide
        jQuery('#import-coming-soon').hide(); // Default Hide

		jQuery('#import-'+style_name).show();
	};

    show_style_variant(jQuery("#import-type :selected").val());

	jQuery('#import-type').change(function () {
        show_style_variant(jQuery("#import-type :selected").val());
	});
});

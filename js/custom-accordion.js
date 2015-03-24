jQuery(document).ready(function ($) {
    $("#custom-accordion").accordion();
	
	// if ($.isFunction($.fn.accordion)) {
    var url = document.URL;
	
    // grab the value of the hash
    var hashValue = url.substring(url.indexOf('#')).replace('#', '');
	
    // select active accordion 
    var accordin_index = !isNaN(hashValue) ? parseInt(hashValue) : 0;
	
    jQuery("#custom-accordion").accordion({
            collapsible: true,
            active: accordin_index
    });
	
    jQuery(".ui-accordion-content").mCustomScrollbar({
        scrollButtons: {
            enable: false,
            scrollSpeed: 5,
        },
        contentTouchScroll: true,
        mouseWheel: true,
        mouseWheelPixels: "auto",
        advanced: {
            updateOnBrowserResize: true,
            autoScrollOnFocus: true
        },

    });
    jQuery(".ui-accordion-header").click(function (e) {
        var c = jQuery(this).next().find(".mCustomScrollBox").attr('id');
        var d = c.replace("mCSB", "_mCS");
        jQuery("." + d).mCustomScrollbar("update");
    });

});

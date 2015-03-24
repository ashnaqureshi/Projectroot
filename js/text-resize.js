/**
 * @file
 * Define JS code used to text resize in content area.
 */

jQuery(document).ready(function ($) {
  var text_size_element = "";
  var text_size_bodyelement = "";
  var text_resize_val = '';

  if ($.cookie("text_resize_element")) {
    text_size_element = $.cookie("text_resize_element");
  }


	if ($.cookie("text_resize_bodyelement")) {
    text_size_bodyelement = $.cookie("text_resize_bodyelement");
  }

  if ($.cookie("text_resize_val")) {
    text_resize_val = $.cookie("text_resize_val");
  }

  if(typeof(Storage) !== "undefined") {
    if (!text_size_element) {
      text_size_element = localStorage.getItem("text_resize_element");
    }
    if (!text_size_bodyelement) {
      text_size_bodyelement = localStorage.getItem("text_size_bodyelement");
    }
    if (!text_resize_val) {
      text_resize_val = localStorage.getItem("text_resize_val");
    }
  }

  if (!text_size_element) {
    text_size_element = "med";
  }

  if (!text_size_bodyelement) {
    text_size_bodyelement = "tmedium";
  }

  $('.txt-rsg a').removeClass('active');

	$('.txt-rsg .' + text_size_element).addClass("active");
  $('body').addClass(text_size_bodyelement);

  if (text_resize_val) {
    var text_size_val = text_resize_val + 'px';
    $('#main p, #main ul li').css('font-size', text_size_val);
  }
    // to display large text size
    $('.txt-rsg .large').click(function () {
        $('#main p, #main ul li').css('font-size', '16px');
        $('.txt-rsg').children().removeClass("active");
        $(this).addClass("active");
        $.cookie("text_resize_val", 16);
        $('body').removeClass("tsmall tmedium");
        $('body').addClass("tlarge");
        $.cookie("text_resize_element", "large");
        $.cookie("text_resize_bodyelement", "tlarge");
        if(typeof(Storage) !== "undefined") {
          localStorage.setItem("text_resize_val", 16);
          localStorage.setItem("text_resize_element", "large");
          localStorage.setItem("text_resize_bodyelement", "tlarge");
        }
    });
    // to display small text size
    $('.txt-rsg .small').click(function () {
        $('#main p, #main ul li').css('font-size', '12px');
        $('.txt-rsg').children().removeClass("active");
        $(this).addClass("active");
        $('body').addClass("tsmall");
        $('body').removeClass("tlarge tmedium");
        $.cookie("text_resize_val", 12);
        $.cookie("text_resize_element", "small");
        $.cookie("text_resize_bodyelement", "tsmall");
        if(typeof(Storage) !== "undefined") {
          localStorage.setItem("text_resize_val", 12);
          localStorage.setItem("text_resize_element", "small");
          localStorage.setItem("text_resize_bodyelement", "tsmall");
        }
    });
    // to display medium text size
    $('.txt-rsg .med').click(function () {
        $('#main p, #main ul li').css('font-size', '14px');
        $('.txt-rsg').children().removeClass("active");
        $(this).addClass("active");
        $('body').removeClass("tsmall tlarge");
        $('body').addClass("tmedium");
        $.cookie("text_resize_val", 14);
        $.cookie("text_resize_element", "med");
        $.cookie("text_resize_bodyelement", "tmedium");
        if(typeof(Storage) !== "undefined") {
          localStorage.setItem("text_resize_val", 14);
          localStorage.setItem("text_resize_element", "med");
          localStorage.setItem("text_resize_bodyelement", "tmedium");
        }
    });
});

/*!
	Javascript to implement colorbox functionality
*/

jQuery(document).ready(function() {

	var exterlink_popup_html = '<div id="external-popup" class="ltbox" style="display:none"><p>You are now leaving <a href="http://www.RethinkOpioids.com">www.RethinkOpioids.com</a>, a Pfizer Web site. Links to other sites are provided as resources for your convenience. These Web sites are neither owned nor controlled by Pfizer. Pfizer does not endorse and is not responsible for the content or service of the sites.</p><div class="extlink-extra-actions"><div class="extlink-extra-go-action"><a class="ext-override" id="ext-override"  title="Go to link" href="" target="_blank">[Proceed]</a></div><div class="extlink-extra-back-action"><a title="Cancel" href="">[Cancel]</a></div></div></div>';

	jQuery('body').append(exterlink_popup_html);
  

	jQuery('.inline').click(function() {
		jQuery(".inline").colorbox({inline:true, width:"50%"});
	});
	
	jQuery('.inline_1').click(function() {
		jQuery(".inline_1").colorbox({inline:true, width:"50%"});
	});
	
	jQuery('.inline_2').click(function() {
		jQuery(".inline_2").colorbox({inline:true, width:"50%"});
	});
	
	jQuery('.inline_pit').click(function() {
		jQuery(".inline_pit").colorbox({inline:true, width:"50%"});
	});
	
	// Colorbox for videos
    $('.video-link').click(function() {
      var video_id = $(this).attr('data-video-id');
	  
      $('#' + video_id + '-wrapper').removeClass('hide');
      $.colorbox({
        inline:true,
        href:'#' + video_id + '-wrapper',
        onClosed:function() {
          $('#' + video_id + '-wrapper').addClass('hide');
        }
      });
      var video = document.getElementById(video_id + '-video');
      if (video && video.play) {
        video.play();
      }
    });
  
	/*
	jQuery(".video_play").colorbox({inline:true,
    onClosed : function() {
      jQuery('body').removeClass("video_overlay");
    }
    }); 
  
    jQuery(".video_play").click(function() {
		jQuery("body").addClass("video_overlay");
		jQuery('.video-popup').css('display','block');
    }); */
	
	jQuery(".ext-link").click(function() {
		jQuery('#ext-override').attr('href', jQuery(this).attr('href'));
		
		jQuery.colorbox({
			inline:true, 
			href:"#external-popup", 
			width: '632px', 
			height:'212px',
			onCleanup: function(){					// To hide the content after the colorbox is closed
            jQuery('#external-popup').hide();
        }
		});
		
		jQuery('#external-popup').css('display', 'block');
		return false;
    });

  
});
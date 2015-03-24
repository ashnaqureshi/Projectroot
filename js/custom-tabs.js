jQuery(document).ready(function($) {
  jQuery("#tabs").tabs();

  jQuery("#Chronic_Pain1").click(function(){
    jQuery('#tabs').tabs( "option", "active", 1 );
    return false;
  });
  
  jQuery("#Chronic_Pain2").click(function(){
    jQuery('#tabs').tabs( "option", "active", 2 );
    return false;
  });
  
  jQuery("#Chronic_Pain3").click(function(){
    jQuery('#tabs').tabs( "option", "active", 3 );
    return false;
  });

  // jQuery('.custom-tabs ul li a').click(function() {
  //   jQuery(this).parent().addClass('ui-tabs-selected ui-state-active').siblings().removeClass('ui-tabs-selected ui-state-active');
  // });

  // jQuery(function() {
  //   jQuery("#tabs").tabs({
  //       activate: function(event, ui) {
  //           // window.location.hash = ui.newPanel.attr('id');
  //       }
  //   });
  // });

});

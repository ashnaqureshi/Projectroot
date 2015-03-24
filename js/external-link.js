jQuery(document).ready(function($) {
  $('a').filter(function() {
     return this.hostname && this.hostname !== location.hostname;
  }).after("<span class='ext'></span>");
});

jQuery(document).ready(function($) {
  $('.menu li.expanded').hover(function () {
    $(this).addClass('menu-dropdown-hover');
    $(this).find('ul.menu').css('visibility', 'visible');
    $(this).find('ul.menu').css('display', 'block');
  }, function () {
    $(this).removeClass('menu-dropdown-hover');
    $(this).find('ul.menu').css('visibility', 'hidden');
    $(this).find('ul.menu').css('display', 'none');
  });
});

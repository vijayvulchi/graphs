$(function () {
  $('.toggle-settings-sidebar').on('click', function () {
    $('.vj-right-aside').toggleClass('is-opened');
  });
  $('html').addClass('theme-dark');
  $('#theme_switch input[type="radio"]').on('change', function () {
    if ($(this).attr('id') === 'theme_dark') {
      $('html').removeClass('theme-light').addClass('theme-dark');
    }
    if ($(this).attr('id') === 'theme_light') {
      $('html').removeClass('theme-dark').addClass('theme-light');
    }
  });
});
(function ($) {
  "use strict";

  // Jika kamu pakai sidebar menu
  $('#sidebarMenu .nav-link').on('click', function () {
    $('#sidebarMenu').collapse('hide');
  });

  // Smooth scroll dengan offset tinggi navbar (biar gak ketiban)
  $('.smoothscroll').on('click', function (e) {
    e.preventDefault();

    var target = $(this).attr('href');
    var $target = $(target);
    var navHeight = $('.navbar').outerHeight();

    if ($target.length) {
      $('html, body').animate({
        scrollTop: $target.offset().top - navHeight
      }, 300);
    }

    // Kalau kamu ingin menutup menu juga (opsional)
    $('#navbarMenu').collapse('hide');
  });

})(window.jQuery);

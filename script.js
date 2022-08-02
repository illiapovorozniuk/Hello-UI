$(document).ready(function () {
   $('.header__burder').click(function (event) {
      $('.header__burder,.header__menu,.header__logo').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
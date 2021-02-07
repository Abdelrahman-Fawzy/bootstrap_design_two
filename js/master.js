$(function () {
  'use strict';
  //nicescroll
  $('html, body').niceScroll();

  // scrolling with navbar
  $(window).scroll(function () {
    var navbar = $('.navbar');
    if ($(window).scrollTop() >= navbar.height()) {
      if (!(navbar.hasClass('scrolled'))) {
        navbar.addClass('scrolled');
      }
    } else {
      navbar.removeClass('scrolled');
    }
  });

  //tabs section
  $('.tab-list li').click(function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.tabs-section .content').hide();
    $('.' + $(this).data('class')).show();
  });

  //scroll to top button
  var scrollbtn = $('.scrollbtn');
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 600) {
      scrollbtn.fadeIn()
    } else {
      scrollbtn.fadeOut();
    }
  });
  scrollbtn.click(function () {
    $('html, body').animate({
      scrollTop : 0
    }, 800)
  });

  //change site Colors
  $('.dropdown-menu li').click(function () {
    console.log($(this).data('value'));
    $("link[href*='theme']").attr('href',$(this).data('value'));
  })
});

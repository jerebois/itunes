/**
  Jeremie Boissevain - CMO-A - 2017-2018
  New Media Design II - iTunes - Scripts
**/

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Enable Bootstrap popover
  $('[data-toggle="popover"]').popover({html:true});

  // Fill stars depending on rating
  var $star_rating = $('.star-rating .fa');
  var $name = null;

  // Set all stars and handle them on change per field
  var SetRatingStar = function() {
    return $star_rating.each(function() {
      var $name_var = $(this).closest('.star-rating').children('input.rating-value').attr("name");
      if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating')) && $name === $name_var || $name === null) {
        return $(this).removeClass('fa-star-o').addClass('fa-star');
      } else if ($name === null || $name === $name_var) {
        return $(this).removeClass('fa-star').addClass('fa-star-o');
      }
    });
  };

  // On click event
  $star_rating.on('click', function() {
    // Find the rating that was defined in the 'data-rating' attribute
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));

    // Set the input name of the star that was just clicked (to avoid changing all stars simultaneously)
    $name = $(this).closest('.star-rating').children('input.rating-value').attr("name");
    return SetRatingStar();
  });

  $(document).ready(function() {
      SetRatingStar();
  });

})(jQuery); // End of use strict

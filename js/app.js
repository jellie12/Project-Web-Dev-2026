$(function() {
  $('.scroll-page').on('click', function(e) {
    var href = this.hash || $(this).closest('a').attr('href');
    if (!href) return;

    e.preventDefault();

    var offset = 0;
    var speed = 800;
    var target = $(href);

    $('nav .menu a').each(function() {
      $(this).removeClass('active');
    });

    $('nav .menu a[href="' + href + '"]').addClass('active');

    $('html, body').animate({
      scrollTop: target.offset().top - offset
    }, speed, 'swing');
  });
});

$(window).scroll(function() {
  var scrollPos = $(document).scrollTop();

  $('nav .menu a').each(function() {
    var curLink = $(this);
    var refElement = $(curLink.attr('href'));

    if (refElement.position().top <= scrollPos + 60) {
      $('nav .menu a').removeClass('active');
      curLink.addClass('active');
    } else {
      curLink.removeClass('active');
    }
  });
});

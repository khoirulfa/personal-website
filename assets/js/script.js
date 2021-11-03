!(function($) {
  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('bx-menu-alt-right bx-x');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('bx-menu-alt-right bx-x');
      }
    }
  });
  
	var nav_sections = $('section');
	var main_nav = $('.nav-menu, .mobile-nav');

	$(window).on('scroll', function() {
		var cur_pos = $(this).scrollTop() + 200;

		nav_sections.each(function() {
			var top = $(this).offset().top,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				if (cur_pos <= bottom) {
					main_nav.find('li').removeClass('active');
				}
				main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
			}
			if (cur_pos < 300) {
				$('.nav-menu ul:first li:first').addClass('active');
			}
		});
	});

	$('.back-to-top').click(function() {
		$('html, body').animate(
			{
				scrollTop : 0
			},
			1500,
			'easeInOutExpo'
		);
		return false;
	});
})(jQuery);

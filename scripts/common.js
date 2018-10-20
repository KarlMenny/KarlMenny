    $(document).on('mouseenter mouseleave', '.mainNavigation > .level-1 > ul > li', function (d) {
      d.preventDefault();
      var c = $(this),
      b = $('.level-2', c);
      if (d.type == 'mouseenter') {
        $('#mainSearch').slideUp('fast');
        var a = function () {
          if (c.hasClass('fire')) {
            c.addClass('hover');
            $('.sideNavigation li', c).removeClass('fire hover');
            $('.level-3', c).hide();
            $('.sideNavigation li:first-child', c).addClass('fire hover');
            $('.level-3', c).css({
              width: $(window).width() - 205
            });
            $('.level-3:eq(0)', c).show();
            $('.level-3 .inner', c).show();
            b.fadeIn('fast')
          }
        };
        c.addClass('fire');
        setTimeout(a, 400)
      }
      if (d.type == 'mouseleave') {
        c.removeClass('fire');
        c.removeClass('hover');
        b.fadeOut()
      }
    });
    $(document).on('mouseenter mouseleave', '.mainNavigation .sideNavigation > li', function (f) {
      f.preventDefault();
      if ($(this).hasClass('fire')) {
        return
      }
      var d = $(this),
      b = d.index(),
      c = $('.level-3:eq(' + b + ')', d.parents('.level-2'));
      if (f.type == 'mouseenter') {
        $('.sideNavigation > li').removeClass('fire');
        $('.sideNavigation > li').removeClass('hover');
        $('.mainNavigation .level-3').hide();
        $('.mainNavigation .level-3 .inner').hide();
        var a = function () {
          if (d.hasClass('fire')) {
            d.addClass('hover');
            c.show();
            $('.inner', c).fadeIn('fast')
          }
        };
        d.addClass('fire');
        a()
      }
    });
    $(document).on('click', '.mainNavigation .level-1 ul li a, .mainNavigation .level-3 .list ul li a, .mainNavigation .level-3 .bottomLinks a,.mainNavigation .level-2 .sideNavigation li a', function (a) {
      $('.level-2').fadeOut('fast')
    })


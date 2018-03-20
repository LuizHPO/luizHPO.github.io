$('.home a').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href'),
      targetOffSet = $(id).offset().top;
  
  $('html, body').animate({
    scrollTop: targetOffSet
  }, 500);
});

$('section').each(function(){
  var height = $(this).height(),
      offSetTop = $(this).offset().top,
      id = $(this).attr('id'),
      itemMenu = $('a[href="#' + id +'"]'),
      menuHeight = $('.header').innerHeight();
  
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    
    if (offSetTop - menuHeight < scrollTop && offSetTop + height - menuHeight > scrollTop) {
      itemMenu.addClass('ativo');
    } else {
      itemMenu.removeClass('ativo');
    }
  });
});

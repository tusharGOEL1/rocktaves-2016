function resize() {
  $uw = parseInt($('nav ul').css('width'));
  $ww = parseInt($(window).width());
  $('nav ul').css('left',0.5*($ww - $uw));

  $ch = parseInt($('.caption').css('height'));
  $wh = parseInt($(window).height());
  $('.caption').css('top', 0.5*($wh - $ch));


}

$(function(){
  resize();
});

$(window).resize(function(){
  setTimeout(resize(), 1000);
});

$('.fade').click(function(){
  $name = $(this).attr('name');
  $name2 = $('.normal:visible').attr('id');
  if($name != $name2){
    $('.normal:visible').fadeOut('fast',function(){
          $('#'+$name).fadeIn('fast');
    });
  }
});

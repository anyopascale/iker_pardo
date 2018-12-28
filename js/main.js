$(".box_sliddrrr > div:gt(0)").hide();

setInterval(function() {
  $('.box_sliddrrr > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.box_sliddrrr');
}, 3000);

$('.btmm_menu').click(function(){
    $(this).toggleClass('activemm');
    $('.menuuu').toggleClass('actvvv_mennnss1');
    $('.covrrr_info_main').toggleClass('acvvv_cvrrr_bbll');
});
$('.covrrr_info_main').click(function(){
    $('.btmm_menu').removeClass('activemm');
    $('.menuuu').removeClass('actvvv_mennnss1');
    $(this).removeClass('acvvv_cvrrr_bbll');
});




$('.bx_lnngg').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});

$('.btm_formmmmm').click(function(){
    $('.ventana_formmmm').addClass('form_active');
});
$('.btm_close_vntnt').click(function(){
    $('.ventana_formmmm').removeClass('form_active');
});




$(document).ready(function(){
    $('#img_dettt').zoom({url: 'images/gallery/zuhaitz_bakartia.jpg'});
  });



  $(document).ready(function(){
    $('#img_dettt')
      .wrap('<span style="display:inline-block"></span>')
      .css('display', 'block')
      .parent()
      .zoom();
  });

  $('#img_dettt').zoom(); 
$('#img_dettt').trigger('zoom.destroy'); 
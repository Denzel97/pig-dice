//$(document).ready(function()  {
  //$(".well h3").click(function() {
    //$("#rules").fadeToggle();
  //});
//});

$(document).ready(function() {
  $('#rules').hide();
  $('.well h3').show();
  $('.well h3').click(function() {
    $('#rules').fadeToggle(1000);
  });
  
});

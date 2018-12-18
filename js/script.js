$(document).ready(function() {

  //hide my Game Rules first
  $('#rules').hide();

  //show game rules onclick
  $('.well h3').click(function() {
    $('#rules').fadeToggle(100);
  });

  //hide the game section
  $('#jumb').hide();

  //show game section onclick
  $('#game').click(function() {
    $('#jumb').fadeToggle(100);
    $('#tron').hide();
  });
});

function roll() {
  var rol = (Math.ceil(Math.random() * 6));
  $('#score').html(rol);
}

$('#roll').click(function() {
  roll();

});

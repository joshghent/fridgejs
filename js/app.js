var main = function() {

  $('.btn').click(function submit() {
    var add = $('.magnet-box').val();
    $('<li>').text(add).prependTo('.magnets');
    $('.magnet-box').val('');
    $('.counter').text('0');
    $('.magnet-box').focus();
  });
  $('.magnet-box').keyup(function() {
    var magnetLength = $(this).val().length;
    var characterAmount = 0 + magnetLength;
    $('.counter').text(characterAmount);
  });
  $('.magnet-box').keypress(function(e) {
    if (e.which == 13) {
      $('.btn').submit();
      return false; //<---- Add this line
    }
  });
  $(function() {
    $('.magnet-box').focus();
  });
};

$(document).ready(main);

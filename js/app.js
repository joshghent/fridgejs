var main = function() {

  $('.btn').click(function submit() {
    var add = $('.magnet-box').val(); // Get the value of the input
    $('<li>').text(add).prependTo('.magnets'); // Add that value to a new li element
    $('.magnet-box').val(''); // Reset the value of the input to blank
    $('.counter').text('0'); // Reset the character counter
    $('.magnet-box').focus(); // Refocus the text box after submit
  });
  $('.magnet-box').keyup(function() {
    var magnetLength = $(this).val().length;
    var characterAmount = 0 + magnetLength;
    $('.counter').text(characterAmount);
  });
  $('.magnet-box').keypress(function(e) {
    if (e.which == 13) {
      $('.btn').submit();
      return false;
    }
  });
  $(function() {
    $('.magnet-box').focus();
  });
};

$(document).ready(main);

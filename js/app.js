var main = function(){

  $('.btn').click(function(){
    var add = $('.magnet-box').val();
    $('<li>').text(add).prependTo('.magnets');
    $('.magnet-box').val('');
    $('.counter').text('0');
  });
  $('.magnet-box').keyup(function(){
    var magnetLength = $(this).val().length;
    var characterAmount = 0 + magnetLength;
    $('.counter').text(characterAmount);
  });
};

$(document).ready(main);

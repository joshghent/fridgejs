var main = function(){
  $('.magnet-box').keyup(function(){
    var magnetLength = $(this).val().length;
    var characterAmount = 0 + magnetLength;
    $('.counter').text(characterAmount);
  });
};

$(document).ready(main);

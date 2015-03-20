var main = function(){

  $('.btn').click(function submit(){
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
  $('.magnet-box input').keydown(function(e){
    if(e.keycode == 13){
      alert("You pressed enter!");
    }
  });
  $(function(){
    $('.magnet-box').focus();
  });
};

$(document).ready(main);

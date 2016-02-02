// We will store the list of 'magnets' as an array of objects and then store that array
// using localStorage
var magnets_list = [];

$('.magnet_box').keypress(function(e){
    if(e.which == 13){
        $('#add_magnet_button').click();
    }
})

$('#add_magnet_button').on('click', add_magnet_to_magnets_list);

// Called when a keyevent occurs
$('.magnet_box').keypress(magnet_length_character_counter);

// We call this function on keyup as well because if you delete the the input text and 
// press another key
// at the same time then the counter will not update correctly.
$('.magnet_box').keyup(magnet_length_character_counter);

function magnet_length_character_counter(){
    var magnet_length = $(this).val().length;
    var character_count = 0 + magnet_length;
    $('.counter').text(character_count); 
}

function add_magnet_to_magnets_list(){
    var magnet_text = $('.magnet_box').val();
    
    // Create a new object to store the magnets content in
    var new_magnet = {};
    // Set the magnet_text key equal to the value of the input field on the page
    new_magnet.magnet_text = magnet_text;
    
    magnets_list.push(new_magnet);
    
    $('.magnet_box').val('');
    $('.magnet_box').focus();
    $('.counter').text('0');
}

// This function will be called every time there is an update to the magnets_list array
function render(){
    
}

$(document).ready(function(){
    
});
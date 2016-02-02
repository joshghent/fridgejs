// We will store the list of 'magnets' as an array of objects and then store that array
// using localStorage
var magnets_list = [];

$('.magnet_box').keypress(function(e) {
    if (e.which == 13) {
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

function magnet_length_character_counter() {
    var magnet_length = $(this).val().length;
    var character_count = 0 + magnet_length;
    $('.counter').text(character_count);
}

function add_magnet_to_magnets_list() {
    var magnet_text = $('.magnet_box').val();

    // Create a new object to store the magnets content in
    var new_magnet = {};
    // Set the magnet_text key equal to the value of the input field on the page
    new_magnet.magnet_text = magnet_text;
    // Give the magnet a unique id
    new_magnet.magnet_id = generate_id();

    magnets_list.push(new_magnet);

    localStorage.setItem('magnets_list', JSON.stringify(magnets_list));

    $('.magnet_box').val('');
    $('.magnet_box').focus();
    $('.counter').text('0');

    render();
}

function generate_id() {
    var id = 0;
    if (localStorage.getItem('id')) {
        // Set the id variable to the localstorage value to an integer
        id = parseInt(localStorage.getItem('id'));
    }
    id++;
    // Make a new variable that will store a string version since localstorage only accepts strings.
    var id_to_string = id.toString();
    // Store the id variably locally so it does not get reset to zero
    localStorage.setItem('id', id_to_string);

    return id;
}

// This function will be called every time there is an update to the magnets_list array
function render() {
    // First clear the list to ensure we do not get duplicates.
    // I will update this eventually so it only renders new notes rather than all of them
    $('.magnets').empty();

    var magnets_list_from_localstorage = JSON.parse(localStorage.getItem('magnets_list'));

    /*var array_to_render_from = $.merge(magnets_list, magnets_list_from_localstorage);*/
    // Loop through the array
    if (magnets_list_from_localstorage != null) {
        for (var i = 0; i < magnets_list_from_localstorage.length; i++) {

            // Get the attributes we want from the objects
            var id = magnets_list_from_localstorage[i].magnet_id;
            var magnet_text = magnets_list_from_localstorage[i].magnet_text;

            $('.magnets').append(
                $('<li/>')
                .attr('id', id)
                .text(magnet_text)
            );
        }
    }

}

$(document).ready(function() {
    if (localStorage.getItem('magnets_list') != null) {
        magnets_list = JSON.parse(localStorage.getItem('magnets_list'));
    }

    render();
});
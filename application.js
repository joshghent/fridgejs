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

// This function handles the character counter besides the add button
function magnet_length_character_counter() {
    // Get the length of the value in the input box
    var character_count = $(this).val().length;
    // Set the character counter equal to the character_count variable
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
    
    // Push the object to the magnets_list array
    magnets_list.push(new_magnet);

    // Save that magnets_list array to localstorage
    // We stringify it because localstorage only accepts strings
    localStorage.setItem('magnets_list', JSON.stringify(magnets_list));
    
    // Set the value back to nothing
    $('.magnet_box').val('');
    // Refocus the input
    $('.magnet_box').focus();
    // Set the counter back to zero
    $('.counter').text('0');

    render();
}

// This function will generate unique ids starting from 0.
// It simply returns an id and uses localstorage to ensure there will be no clashing id's
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
    
    // Retrieve the magnets list from localstorage
    var magnets_list_from_localstorage = JSON.parse(localStorage.getItem('magnets_list'));
    
    // Ensure that the localstorage is not null
    if (magnets_list_from_localstorage != null) {
        // Loop through the array
        for (var i = 0; i < magnets_list_from_localstorage.length; i++) {

            // Get the attributes we want from the objects
            var id = magnets_list_from_localstorage[i].magnet_id;
            var magnet_text = magnets_list_from_localstorage[i].magnet_text;

            // Append the magnet to the UL list of .magnets
            $('.magnets').append(
                $('<li/>')
                .attr('id', id)
                .text(magnet_text)
            );
        }
    }

}

$(document).ready(function() {
    // Check if the localstorage returns null, this will occur if the localstorage is cleared or there is a new user
    if (localStorage.getItem('magnets_list') != null) {
        // Set the magnets_list array equal to the localstorage objects
        // We do this to ensure that new items added after reload do not wipe localstorage items
        // It occured because we are setting the localstorage based on the magnets_list array when we add a new magnet
        // Therefore, on initial load we need to insert the old magnets into the magnets_list array to ensure
        // that all magnets will be saved.
        magnets_list = JSON.parse(localStorage.getItem('magnets_list'));
    }
    
    render();

    $('.magnets li').on('click', function(event) {
        var element = $(event.target);
        $(element).attr('contentEditable', 'true');
    });

    $('.magnets li').on('blur', function(event) {
        var element_id = event.target.id;
        var element = $(event.target)[0];
        var new_note_value = $(element).text();

        magnets_list[element_id -1].magnet_text = new_note_value;

        // Save that magnets_list array to localstorage
        // We stringify it because localstorage only accepts strings
        localStorage.setItem('magnets_list', JSON.stringify(magnets_list));
    });
});
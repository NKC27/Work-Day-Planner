// A $( document ).ready() block.
// $( document ).ready(function() {
//     console.log( "ready!" );
// });

// Moment.js needed to display curent date Under Title @top of the page! format for 
$(document).ready(function () {

var displayDate = document.getElementById('currentDay');
var nowDate = moment().format('MMMM Do YYYY H:mm:ss');
displayDate.innerHTML = nowDate;
var currentHour = moment().format("HH");
})

// Button function to clear local storage and clear contents of user input in display
$('#clear').click(function (event) {
    event.preventDefault;
    // The .val() method is primarily used to get the values of form elements such as input, select and textarea.
    $('textarea').val('');
    // clear() method in JavaScript is used for the removal of all the elements from a map and make it empty. It removes all the [key, value] from the map
    localStorage.clear();
})


 


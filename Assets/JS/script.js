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



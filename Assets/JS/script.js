// A $( document ).ready() block.
// $( document ).ready(function() {
//    console.log( "ready!" );
// });

// Moment.js needed to display curent date Under Title @top of the page! format for month/day/year 
$(document).ready(function () {

var displayDate = document.getElementById('currentDay'); // grabbing the id on html
var nowDate = moment().format('MMMM Do YYYY H:mm:ss'); // moment.js and date format
displayDate.innerHTML = nowDate; // puts date into the html 

})
var currentHour = moment().format("HH"); //2-digits hours (24 hour time) from 0 to 23
// Button function to clear local storage and clear contents of user input in display
$('#clear').click(function (event) {
    event.preventDefault;
    // The .val() method is primarily used to get the values of form elements such as input, select and textarea.
    $('textarea').val('');
    // clear() method in JavaScript is used for the removal of all the elements from a map and make it empty. It removes all the [key, value] from the map
    localStorage.clear();
});

// $("#i_am_a_href").attr('id').split('_') // will return [ "i", "am", "a", "href" ]

// $("#i_am_a_href").attr('id').split('_')[1] // will return 'am'

// takes the time from each time-block and compares it to the actual time
$(".timeCompare").each(function () {

    // $("#i_am_a_href").attr('id').split('_') // will return [ "i", "am", "a", "href" ]

    // $("#i_am_a_href").attr('id').split('_')[1] // will return 'am'
    // var timeCompare = $(this).attr("id").split("-");
    var timeCompare = $(this).attr("id").split("-")[1]; // access the 2nd element index 
    
    if (currentHour == timeCompare) {
      // $(this).addClass( "myClass yourClass" );
      $(this).addClass("present");
      // $( "this" ).children().css( "background-color", "red" );
      $(this).children(".description").addClass("textInput");
    } else if (currentHour < timeCompare) {
      // $( "p" ).removeClass( "myClass yourClass" )
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeCompare) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
  
// 1.setItem(): Add key and value to localStorage
// 2.getItem(): This is how you get items from localStorage
// 3.removeItem(): Remove an item by key from localStorage
// 4.clear(): Clear all localStorage
// 5.key(): Passed a number to retrieve the key of a localStorage

$("#hour-09 .time-block").val(localStorage.getItem("09AM"));
$("#hour-10 .time-block").val(localStorage.getItem("10AM"));
$("#hour-11 .time-block").val(localStorage.getItem("11AM"));
$("#hour-12 .time-block").val(localStorage.getItem("12PM"));
$("#hour-13 .time-block").val(localStorage.getItem("13PM"));
$("#hour-14 .time-block").val(localStorage.getItem("14PM"));
$("#hour-15 .time-block").val(localStorage.getItem("15M"));
$("#hour-16 .time-block").val(localStorage.getItem("16PM"));
$("#hour-17 .time-block").val(localStorage.getItem("17PM"));

// $( "li.third-item" ).siblings().css( "background-color", "red" );

// const str = 'The quick brown fox jumps over the lazy dog.';
// const words = str.split(' ');
// console.log(words[3]);
// expected output: "fox"

//grabs values from time and value divs and saves them to local storage
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    // $(this).parents("ul").parent("div").attr("id");
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });
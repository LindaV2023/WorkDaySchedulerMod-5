// data for the date in the header


//const formatDate = (date) => {
  // Get the individual date components
 // var day = date.getDate(); // get the Date part
 // var month = date.getMonth() + 1; // Get the Month (Months are zero-based)
 // var year = date.getFullYear(); // Get the year
 // var hours = date.getHours(); // Get the hour
 // var minutes = date.getMinutes(); // Get the minutes
 // var seconds = date.getSeconds(); // Get the seconds
  
  // Pad single digits with leading zeros to make 2 digits, 
  //var formattedDay = day < 10 ? "0" + day : day;
 // var formattedMonth = month < 10 ? "0" + month : month;
 // var formattedDay = day < 10 ? "0" + day : day;

  // Concatenate (join) the formatted date components
 // return formattedMonth + "/" + formattedDay + "/" + year;
//}

// Usage
//var currentDate = new Date();
//var formatted = formatDate(currentDate);
//console.log(formatted); // Output: "07/16/2023"



var time = dayjs();
// setting current date on the site to the current date from moment.js
$("#currentDay").text(time.format("dddd, MMMM DD, YYYY"));





// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var myDay = [
  {
    id: "0",
    hour: "08",
    time: "08",
    meridiem: "am",
    reminder: ""

  },

  {
    id: "1",
    hour: "09",
    time: "09",
    meridiem: "am",
    reminder: ""

  },

  {
    id: "2",
    hour: "10",
    time: "10",
    meridiem: "am",
    reminder: ""

  },

  {
    id: "3",
    hour: "11",
    time: "11",
    meridiem: "am",
    reminder: ""

  },
]
// data for the date in the header

var time = dayjs();
// setting current date on the site to the current date from moment.js
$("#currentDay").text(time.format("dddd, MMMM DD, YYYY   | HH:mm"));

  
  //   setTimeout(updateEventClasses, 60000);

    
 // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.
  
  // Wait until the DOM is fully loaded before executing the code inside the function.
  $(function () {


//  set current time
       const currentHour = dayjs().format('H');

//set the background color for the hour - past, present, future  
    function hourlyColor() {
      $('.time-block').each(function() {
        const blockHour = parseInt(this.id);
        $(this).toggleClass('past', blockHour < currentHour);
        $(this).toggleClass('present', blockHour === currentHour);
        $(this).toggleClass('future', blockHour > currentHour);
      });
    }

//set the time slot to receive text and information
    function textEntry() {
      $('.saveBtn').on('click', function() {
        const key = $(this).parent().attr('id');
        const value = $(this).siblings('.description').val();
        localStorage.setItem(key, value);
      });
    }
//se the color to refresh when the hour changes   
    function refreshColor() {
      $('.time-block').each(function() {
        const blockHour = parseInt(this.id);
        if (blockHour == currentHour) {
          $(this).removeClass('past future').addClass('present');
        } else if (blockHour < currentHour) {
          $(this).removeClass('future present').addClass('past');
        } else {
          $(this).removeClass('past present').addClass('future');
        }
      });
    }
// set the text to local storage when the lock button is clicked    
    $('.time-block').each(function() {
      const key = $(this).attr('id');
      const value = localStorage.getItem(key);
      $(this).children('.description').val(value);
    });
  
// update the time using day.js  
    function updateTime() {
      const dateElement = $('#date');
      const timeElement = $('#time');
      const currentDate = dayjs().format('dddd, MMMM D, YYYY');
      const currentTime = dayjs().format('hh:mm:ss A');
      dateElement.text(currentDate);
      timeElement.text(currentTime);
    }
// three main functions    
    hourlyColor();
    textEntry();                
    refreshColor();
    
  })
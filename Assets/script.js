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

  // current hour in 24-hour time
  const currentHour = dayjs().hour()
  // using jquery to loop over each time-block element
   $(".time-block").each(function (){
    // storing each block in a variable
    const hourEl = $(this)
    // storing the number portion of id in a string and converting to an interger
    const hourNum = parseInt($(this).attr("id").substr(5, 2), 10)
   
    // comparing values to redefine class to past
    if (currentHour > hourNum) {
      hourEl.removeClass("present")
      hourEl.removeClass("future")
      hourEl.addClass("past")
    }
    // comparing values to redefine class to present
    if (currentHour === hourNum) {
      hourEl.removeClass("past")
      hourEl.removeClass("future")
      hourEl.addClass("present")
    }
    // comparing values to redefine class to future
    if (currentHour < hourNum) {
      hourEl.removeClass("present")
      hourEl.removeClass("past")
      hourEl.addClass("future")
    }
   })
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // Uses dayjs to get the current date
  const currentDate = dayjs().format('MM/DD/YYYY')
  // Stores the p element from html
  const dateEl = $("#currentDay")
  // Sets the text of the p element to the current date
  dateEl.text(currentDate)
});

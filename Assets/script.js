// prevents jquery from running until all elements on dom are ready
$(document).ready(function () {
  // current hour in 24-hour time
  const currentHour = dayjs().hour()
  // using jquery to loop over each time-block element
   $(".time-block").each(function (){
    // storing each block in a variable
    const hourEl = $(this)
    // variable for save buttons for each block
    const saveBtnEl = hourEl.children(".saveBtn")
    // variable for the text area for each block
    const textAreaEl = hourEl.children(".description")
    // variable for local storage key
    const textId = hourEl.attr("id")
    // sets value of text area to whatever is pulled from local storage
    textAreaEl.val(localStorage.getItem(textId))
    // function to save what the user inputs into the text area to local storage
    saveBtnEl.on("click", function() {
      const textValue = textAreaEl.val()
      localStorage.setItem(textId, textValue)
    })

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
  // Uses dayjs to get the current date
  const currentDate = dayjs().format('MM/DD/YYYY')
  // Stores the p element from html
  const dateEl = $("#currentDay")
  // Sets the text of the p element to the current date
  dateEl.text(currentDate)
})

$(document).ready(function () {
  // Display current date and time
  var displayTime = document.querySelector("#currentDay");
  var currentTime = dayjs().format("dddd, MMMM D, YYYY");
  displayTime.textContent = currentTime;

  // Save button click listener
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  // Function to track the hour and apply background indicators
  function hourTracker() {
    var currentHour = dayjs().hour();

    // Loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // Add classes for background indicators
      if (blockHour < currentHour) {
        $(this).addClass("past").removeClass("present future");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past , future").addClass("present");
      } else {
        $(this).removeClass("past , present").addClass("future");
      }
    });
  }
  hourTracker();

  // Function to retrieve and display data from local storage
  function displayText() {
    $(".time-block").each(function () {
      var blockHour = $(this).attr("id");
      $(this).children(".description").val(localStorage.getItem(blockHour));
    });
  }
  displayText();
});
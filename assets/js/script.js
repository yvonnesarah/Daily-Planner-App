// Save button variable to target all save buttons on the page
var saveBtn = $(".saveBtn");

// Display current date at the top of the screen 
$("#currentDay").text(moment().format("dddd Do MMMM YYYY"));

// Function to color-code time blocks based on whether they are in the past, present, or future
function ColorTimeBlock() {
    var hour = moment().hours(); // Get the current hour in 24-hour format

    // Loop through each time block to compare the current time with the time block's hour
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id")); // Get the hour of the current time block by its id

        // Apply different CSS classes based on whether the time block is in the future, present, or past
        if (currentHour > hour) {
            $(this).addClass("future"); // Add 'future' class if the time block is in the future
        } else if (currentHour === hour) {
            $(this).addClass("present"); // Add 'present' class if the time block is the current time
        } else {
            $(this).addClass("past"); // Add 'past' class if the time block is in the past
        }
    })
};

// Event listener for when a save button is clicked
saveBtn.on("click", function() {

    // Get the time and description for the clicked time block
    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();

    // Save the description for that specific time block in local storage
    localStorage.setItem(time, description);
});

// Function to load the saved daily schedule from local storage
function DailyPlannerApp() {

    // Loop through each hour block
    $(".hour").each(function() {
        var currentHour = $(this).text(); // Get the time of the current hour block
        var currentDescription = localStorage.getItem(currentHour); // Retrieve the saved description from local storage

        // If there is a saved description, populate the textarea for that time block
        if(currentDescription !== null) {
            $(this).siblings(".description").val(currentDescription);
        }
    });
}

// Call functions to apply color-coding to time blocks and load saved schedule
ColorTimeBlock();
DailyPlannerApp();

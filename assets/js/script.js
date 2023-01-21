$(document).ready(function () {
    // shows the current date on screen
    var currentDay = moment().format("dddd Do MMMM YYYY")
    $("#currentDay").text(currentDay);
})
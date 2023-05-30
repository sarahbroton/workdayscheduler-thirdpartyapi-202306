// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {

    // date display
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));

    // PAST = GREY
    // PRESENT = RED
    // FUTURE = GREEN

    // / CODE COMES FROM https://github.com/jkaho/workday-scheduler/commit/5385c23cb774f24100d32eec123204d3d4e41bd4#
    // PAST PRESENT FUTURE TIME COLOR BLOCKS
    var currentHour = dayjs().format('H');
    $(".time-block").each(function () {
        if (parseInt(currentHour) === parseInt(this.id)) {
            $(this).addClass("present");
        } else if (parseInt(currentHour) > parseInt(this.id)) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        }
    })

    // CODE IS A MIX OF MY CODE AND  FROM https://github.com/jkaho/workday-scheduler/commit/5385c23cb774f24100d32eec123204d3d4e41bd4#
    // PAST PRESENT FUTURE TIME BLOCKS

    $(".saveBtn").each(function () {
        if (parseInt(currentHour) === parseInt(this.id.split("-")[1])) {
            $(this).addClass("present");
        } else if (parseInt(currentHour) > parseInt(this.id.split("-")[1])) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        }
    })


    // CODE COMES FROM https://github.com/jkaho/workday-scheduler/commit/5385c23cb774f24100d32eec123204d3d4e41bd4#
    // events
    var storedEvents = [];

    initialise();
    function renderEvents() {
        $("textarea").each(function () {
            this.value = "";
        })

        $.each(storedEvents, function () {
            $("textarea" + this.eventTime)[0].value = this.eventText;
        })
    }
    function initialise() {
        var userEvent = JSON.parse(localStorage.getItem("storedEvents"));
        if (userEvent !== null) {
            storedEvents = userEvent;
        }
        renderEvents();
    }

    // my code with help from tutor
    $(".saveBtn").on("click", function () {
        var eventName = $(this).siblings(".description").val();
        var eventTime = $(this).parent().attr('id');

        console.log(eventName, eventTime);

        localStorage.setItem(eventTime, eventName);
    })

    function renderEvents() {
        $("#hour-9 .description").val(localStorage.getItem("hour-9"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    }
})






    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "remo-x" id of the
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




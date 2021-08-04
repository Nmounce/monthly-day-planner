
//set moment to a variable
var now = moment();
//create a variable for the current date
var currentDate = now.format("MM DD YYYY");

//create calendar grid
const container = $(".container");
const times = ["6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM"];

function timeBlocks() {
    for (let i = 0; i < times.length; i++) {
        const row = $("<div>");
        const time = $("<div>");
        const textarea = $("<textarea>");
        const save = $("<button>");
        row.addClass("row");
        time.text(times[i]).addClass("time-block", "col-1");
        textarea.addClass("col-10");
        save.text("SAVE").addClass("saveBtn", "col-1").attr("id", times[i]);
        container.append(row);
        row.append(time, textarea, save);

        save.on("click", function(event) {
            console.log($(this).attr("id"));
            console.log($(this).prev().val());
        })
    }
}
timeBlocks();

//--onclick event to save user input to local storage---//
$(".saveBtn").on("click", function() {
    var hour = $(this).attr("id");
    var textInput = $(this).prev().val();

    localStorage.setItem(hour, textInput);
    console.log(hour, textInput);
});

//color change function

console.log(
now.hour())
for (let i = 0; i < times.length; i++) {
    var timeSlot = times[i].split(" ")[0]
    console.log(timeSlot)
    if (timeSlot < now.hour()) {
        $(`#${times[i]}`).prev().addClass("past")
    } else if (timeSlot > now.hour()) {
        $(`#${times[i]}`).prev().addClass("future")
    }else {
        $(`#${times[i]}`).prev().addClass("present")
    }
};
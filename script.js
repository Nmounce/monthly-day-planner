
//set moment to a variable
var now = moment();
//create a variable for the current date
var currentDate = now.format('MMMM Do YYYY hh:mm:ss a');
var currentHour = now.format('H');
console.log(currentHour);

// display date and time inside the element
document.getElementById("currentDay").textContent = currentDate;

//create calendar grid
var container = $(".container");
var times = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"];
let string = ["7" , "8" , "9" , "10" , "11" , "12" , "1" , "2" , "3" , "4" , "5" , "6" , "7"];
// Number.parseInt(string);

var timeArray = string.split(",")

console.log(timeArray);

//create timeblocks
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

//color coding for time
for (let i = 0; i < string.length; i++) {
    const textarea = $("<textarea>");
    console.log(string, currentHour);
    if (string < currentHour) {
        $(textarea).addClass(".past");
    } else if (string > currentHour) {
        $(textarea).addClass(".future");
    }else {
        $(textarea).addClass(".present");
    }
};
//--onclick event to save user input to local storage---//
$(".saveBtn").on("click", function() {
    var hour = $(this).attr("id");
    var textInput = $(this).prev().val();

    localStorage.setItem(hour, textInput);
    console.log(hour, textInput);
});

// var str = string;
// function print24(str)
// {
//     // Get hours
//     var h1 = Number(str[1] - '0');
//     var h2 = Number(str[0] - '0');
//     var hh = (h2 * 10 + h1 % 10);
  
//     // If time is in "AM"
//     if (str[8] == 'A')
//     {
//         if (hh == 12)
//         {
//             document.write("00");
//             for (var i = 2; i <= 7; i++)
//                 document.write(str[i]);
//         }
//         else
//         {
//             for (var i = 0; i <= 7; i++)
//                 document.write(str[i]);
//         }
//     }
  
//     // If time is in "PM"
//     else
//     {
//         if (hh == 12)
//         {
//             document.write("12");
//             for (var i = 2; i <= 7; i++)
//                 document.write(str[i]);
//         }
//         else
//         {
//             hh = hh + 12;
//             document.write(hh);
//             for (var i = 2; i <= 7; i++)
//                 document.write(str[i]);
//         }
//     }
// }


//color change function

// console.log(
// now.hour())

// function currentHour(format) {
//     var time = moment().format(format);
//     $("#current-date")
// }
// function formatAMPM(date) {
//     var hours = date.getHours();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     var strTime = hours + ' ' + ampm;
//     return strTime;
//   }
  
//   console.log(formatAMPM(new Date));

// var string = times;

// console.log(d);

// const unitTime = Date.parse(currentDate);
// console.log(unitTime);
// let text = '{ "times" : [' +
// '{ "time":"6" , "ap":"AM" },' +
// '{ "time":"7" , "ap":"AM" },' +
// '{ "time":"8" , "ap":"AM" } ]}';
// const obj = JSON.parse(text);
// console.log(obj);
  
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
// const currentDate = moment().format('MM/DD/YYYY'); // get current date
// document.getElementById("currentDay").textContent = currentDate; // display inside the element

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

$(function() {
  var nowMoment = moment();
  var nowDate = new Date();

  var displayMoment = document.getElementById("currentDay");
  displayMoment.innerHTML = nowMoment;

  var displayDate = document.getElementsByClassName("displayJsDate");
  displayDate.innerHTML = nowDate;


    $( function() {
        $( ".boxes" ).selectable();
      } );

    $( ".boxes" ).click(function(e) {

        let row = 0, length = 1, column = 0
        let timeObj = {
            "5 AM" : 1,
            "6 AM" : 2,
            "7 AM" : 3,
            "8 AM" : 4,
            "9 AM" : 5,
            "10 AM" : 6,
            "11 AM" : 7,
            "12 PM" : 8,
            "1 PM" : 9,
            "2 PM" : 10,
            "3 PM" : 11,
            "4 PM" : 12,
            "5 PM" : 13,
            "6 PM" : 14,
            "7 PM" : 15,
            "8 PM" : 16,
            "9 PM" : 17,
            "10 PM" : 18,
            "11 PM" : 19,
            "12 AM" : 20,
            "1 AM" : 21,
            "2 AM" : 22,
            "3 AM" : 23,
            "4 AM" : 24,
        }

        $('#modal-container').toggle();

        $('#modal-container--close').click(function(){
            $('#modal-container').css('display', 'none')
        });
        $('#modal-container--form').submit(function(e){
            e.preventDefault()
            row = timeObj[$( "#start-select" ).val()]
            length = (timeObj[$( "#end-select" ).val()]) - (timeObj[$( "#start-select" ).val()])
            $('#content').append(`<div class='event' style='grid-row:${row}/span ${length};grid-column:${column};background-color: yellow;'>Reservation</div>`)
            $('#modal-container--form')[0].reset()
            $('#modal-container--form').off()
            $('#modal-container').toggle()
            column = event.target.days.match(/\d+/)[0];        })
      });
      const ONE_DAY = 86400000;

      const today = new Date();
      const yesterday = nowDate(Number(today) - ONE_DAY);
      console.log(yesterday < today);

      var tues= ("#tuesday");
      tues= nowMoment

      if (tues)
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future


//     var tense = ('#currentday');
//     var start = ('#start-select');

//     if (start < tense)}

// function changeColor(){
    
//     var color = elem.css('background-color');
//     if (elem == )
// }

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
// ```

//sources: 
// http://5.9.10.113/68338961/moment-js-confusion-for-displaying-the-date
// https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-i-6ba0d2b37e6f
// https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-ii-7af7d239a55
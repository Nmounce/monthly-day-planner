//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
const currentDate = moment().format('MM/DD/YYYY'); // get current date
document.getElementById("currentDay").textContent = currentDate; // display inside the element

jQuery(document).ready(function(){ 
  iCal = new Web2Cal( "calendar",
         { 
              loadEvents: function(moment){ 
                              /* Get events from any source. This can be a PHP/Java/.NET/Facebook or any other source. Once you have the data, invoke ical.render(data).*/
                             ical.render( eventSource.getEvents() ); 
                          } 
             ,onNewEvent: function(event, groups, allDay){ } 
             ,onUpdateEvent: function(event){ }
         });
         iCal.build(); 
  }); 


 //datepicker module 
  $( function() {
    $( "#datePicker" ).datepicker();
  } );

  $( function() {
    $( "#calendar" ).selectable();
  } );

$( "#calendar" ).click(function(e) {

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

    $('#modal').toggle();

    $('#modal').click(function(){
        $('#modal').css('display', 'none')
    });
    $('#modal-container-form').submit(function(e){
        e.preventDefault()
        row = timeObj[$( "#start-select" ).val()]
        length = (timeObj[$( "#end-select" ).val()]) - (timeObj[$( "#start-select" ).val()])
        $('#calendar').append(`<div class='event' style='grid-row:${row}/span ${length};grid-column:${column};background-color: yellow;'>Details</div>`)
        $('#modal-container-form')[0].reset()
        $('#modal-container-form').off()
        $('#modal').toggle()       })
  });
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
// ```


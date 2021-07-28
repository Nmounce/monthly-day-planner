var container = $ (".container")


for (let i = 0; i < 12; i++) {
var row = $("<div>").addClass("row")
var timeBlock = $("<div>").addClass(["time-block", "col-1"]).text("9AM")
var textarea = $("<textarea>").addClass("col-9")
var button = $("<button>").addClass(["saveBtn col-2"])

container.append(row);
row.append(timeBlock, textarea, button);
}
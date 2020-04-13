//find the current date and append it to the element on the page
var dateEL = $("#currentDay");
var today = moment().format('dddd [,] MMMM Do');
$("#currentDay").append(today);

var row9Am = 9;
var row10Am = 10;
var row11Am = 11;
var row12Pm = 12;
var row1Pm = 13;
var row2Pm = 14;
var row3Pm = 15;
var row4Pm = 16;
var row5Pm = 17;

var changeTime = moment().format('H')
console.log(changeTime);

if(changeTime < row9Am) {
    $("#time1col1").addClass("future");
    $("#time1col2").addClass("future");
}
else if(changeTime > row9Am) {
    $("#time1col1").addClass("past");
    $("#time1col2").addClass("past");
}
else if(changeTime == row9Am) {
    $("#time1col1").addClass("present");
    $("#time1col2").addClass("present");
}

if(changeTime < row10Am) {
    $("#time2col1").addClass("future");
    $("#time2col2").addClass("future");
}
else if(changeTime > row10Am) {
    $("#time2col1").addClass("past");
    $("#time2col2").addClass("past");
}
else if(changeTime == row10Am) {
    $("#time2col1").addClass("present");
    $("#time2col2").addClass("present");
}

if(changeTime < row11Am) {
    $("#time3col1").addClass("future");
    $("#time3col2").addClass("future");
}
else if(changeTime > row11Am) {
    $("#time3col1").addClass("past");
    $("#time3col2").addClass("past");
}
else if(changeTime == row11Am) {
    $("#time3col1").addClass("present");
    $("#time3col2").addClass("present");
}

if(changeTime < row12Pm) {
    $("#time4col1").addClass("future");
    $("#time4col2").addClass("future");
}
else if(changeTime > row12Pm) {
    $("#time4col1").addClass("past");
    $("#time4col2").addClass("past");
}
else if(changeTime == row12Pm) {
    $("#time4col1").addClass("present");
    $("#time4col2").addClass("present");
}

if(changeTime < row1Pm) {
    $("#time5col1").addClass("future");
    $("#time5col2").addClass("future");
}
else if(changeTime > row1Pm) {
    $("#time5col1").addClass("past");
    $("#time5col2").addClass("past");
}
else if(changeTime == row1Pm) {
    $("#time5col1").addClass("present");
    $("#time5col2").addClass("present");
}

if(changeTime < row2Pm) {
    $("#time6col1").addClass("future");
    $("#time6col2").addClass("future");
}
else if(changeTime > row2Pm) {
    $("#time6col1").addClass("past");
    $("#time6col2").addClass("past");
}
else if(changeTime == row2Pm) {
    $("#time6col1").addClass("present");
    $("#time6col2").addClass("present");
}

if(changeTime < row3Pm) {
    $("#time7col1").addClass("future");
    $("#time7col2").addClass("future");
}
else if(changeTime > row3Pm) {
    $("#time7col1").addClass("past");
    $("#time7col2").addClass("past");
}
else if(changeTime == row3Pm) {
    $("#time7col1").addClass("present");
    $("#time7col2").addClass("present");
}

if(changeTime < row4Pm) {
    $("#time8col1").addClass("future");
    $("#time8col2").addClass("future");
}
else if(changeTime > row4Pm) {
    $("#time8col1").addClass("past");
    $("#time8col2").addClass("past");
}
else if(changeTime == row4Pm) {
    $("#time8col1").addClass("present");
    $("#time8col2").addClass("present");
}

if(changeTime < row5Pm) {
    $("#time9col1").addClass("future");
    $("#time9col2").addClass("future");
}
else if(changeTime > row5Pm) {
    $("#time9col1").addClass("past");
    $("#time9col2").addClass("past");
}
else if(changeTime == row5Pm) {
    $("#time9col1").addClass("present");
    $("#time9col2").addClass("present");
}

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
    $('#input1').addClass("past");
    $("#time1col2").addClass("future");
}
else if(changeTime > row9Am) {
    $('#input1').addClass("past");
    $("#time1col2").addClass("past");
}
else if(changeTime == row9Am) {
    $('#input1').addClass("past");
    $("#time1col2").addClass("present");
}

if(changeTime < row10Am) {
    $('#input2').addClass("past");
    $("#time2col2").addClass("future");
}
else if(changeTime > row10Am) {
    $('#input2').addClass("past");
    $("#time2col2").addClass("past");
}
else if(changeTime == row10Am) {
    $('#input2').addClass("past");
    $("#time2col2").addClass("present");
}

if(changeTime < row11Am) {
    $('#input3').addClass("past");
    $("#time3col2").addClass("future");
}
else if(changeTime > row11Am) {
    $('#input3').addClass("past");
    $("#time3col2").addClass("past");
}
else if(changeTime == row11Am) {
    $('#input3').addClass("past");
    $("#time3col2").addClass("present");
}

if(changeTime < row12Pm) {
    $('#input4').addClass("past");
    $("#time4col2").addClass("future");
}
else if(changeTime > row12Pm) {
    $('#input4').addClass("past");
    $("#time4col2").addClass("past");
}
else if(changeTime == row12Pm) {
    $('#input4').addClass("past");
    $("#time4col2").addClass("present");
}

if(changeTime < row1Pm) {
    $('#input5').addClass("past");
    $("#time5col2").addClass("future");
}
else if(changeTime > row1Pm) {
    $('#input5').addClass("past");
    $("#time5col2").addClass("past");
}
else if(changeTime == row1Pm) {
    $('#input5').addClass("past");
    $("#time5col2").addClass("present");
}

if(changeTime < row2Pm) {
    $('#input6').addClass("past");
    $("#time6col2").addClass("future");
}
else if(changeTime > row2Pm) {
    $('#input6').addClass("past");
    $("#time6col2").addClass("past");
}
else if(changeTime == row2Pm) {
    $('#input6').addClass("past");
    $("#time6col2").addClass("present");
}

if(changeTime < row3Pm) {
    $('#input7').addClass("past");
    $("#time7col2").addClass("future");
}
else if(changeTime > row3Pm) {
    $('#input7').addClass("past");
    $("#time7col2").addClass("past");
}
else if(changeTime == row3Pm) {
    $('#input7').addClass("past");
    $("#time7col2").addClass("present");
}

if(changeTime < row4Pm) {
    $('#input8').addClass("past");
    $("#time8col2").addClass("future");
}
else if(changeTime > row4Pm) {
    $('#input8').addClass("past");
    $("#time8col2").addClass("past");
}
else if(changeTime == row4Pm) {
    $('#input8').addClass("past");
    $("#time8col2").addClass("present");
}

if(changeTime < row5Pm) {
    $('#input9').addClass("past");
    $("#time9col2").addClass("future");
}
else if(changeTime > row5Pm) {
    $('#input9').addClass("past");
    $("#time9col2").addClass("past");
}
else if(changeTime == row5Pm) {
    $('#input9').addClass("past");
    $("#time9col2").addClass("present");
}

//Make tasks an array
var tasks = [];
var tasks1 = [];

$('#row9am').on('click', '#firstbutton', function(event) {
    event.preventDefault();
    var task1 = $('#input1').val().trim();
    tasks1.push(task1);
    localStorage.setItem('taskList1', JSON.stringify(tasks1));
});
$('#row9am #input1').val(JSON.parse(localStorage.getItem('taskList1')));

var tasks2 = [];
$('#row10am').on('click', '#secondbutton', function(event) {
    event.preventDefault();
    var task2 = $('#input2').val().trim();
    tasks2.push(task2);
    localStorage.setItem('taskList2', JSON.stringify(tasks2));
});
$('#row10am #input2').val(JSON.parse(localStorage.getItem('taskList2')));

var tasks3 = [];
$('#row11am').on('click', '#thirdbutton', function(event) {
    event.preventDefault();
    var task3 = $('#input3').val().trim();
    tasks3.push(task3);
    localStorage.setItem('taskList3', JSON.stringify(tasks3));
});
$('#row11am #input3').val(JSON.parse(localStorage.getItem('taskList3')));

var tasks4 = [];
$('#row12pm').on('click', '#fourthbutton', function(event) {
    event.preventDefault();
    var task4 = $('#input4').val().trim();
    tasks4.push(task4);
    localStorage.setItem('taskList4', JSON.stringify(tasks2));
});
$('#row12pm #input4').val(JSON.parse(localStorage.getItem('taskList4')));

var tasks5 = [];
$('#row1pm').on('click', '#fifthbutton', function(event) {
    event.preventDefault();
    var task5 = $('#input5').val().trim();
    tasks5.push(task5);
    localStorage.setItem('taskList5', JSON.stringify(tasks5));
});
$('#row1pm #input5').val(JSON.parse(localStorage.getItem('taskList5')));

var tasks6 = [];
$('#row2pm').on('click', '#sixthbutton', function(event) {
    event.preventDefault();
    var task6 = $('#input6').val().trim();
    tasks6.push(task6);
    localStorage.setItem('taskList6', JSON.stringify(tasks6));
});
$('#row2pm #input6').val(JSON.parse(localStorage.getItem('taskList6')));

var tasks7 = [];
$('#row3pm').on('click', '#seventhbutton', function(event) {
    event.preventDefault();
    var task7 = $('#input7').val().trim();
    tasks7.push(task7);
    localStorage.setItem('taskList7', JSON.stringify(tasks7));
});
$('#row3pm #input7').val(JSON.parse(localStorage.getItem('taskList7')));

var tasks8 = [];
$('#row4pm').on('click', '#eighthbutton', function(event) {
    event.preventDefault();
    var task8 = $('#input8').val().trim();
    tasks8.push(task8);
    localStorage.setItem('taskList8', JSON.stringify(tasks8));
});
$('#row4pm #input8').val(JSON.parse(localStorage.getItem('taskList8')));

var tasks9 = [];
$('#row5pm').on('click', '#ninthbutton', function(event) {
    event.preventDefault();
    var task9 = $('#input9').val().trim();
    tasks9.push(task9);
    localStorage.setItem('taskList9', JSON.stringify(tasks9));
});
$('#row5pm #input9').val(JSON.parse(localStorage.getItem('taskList9')));





function clickAction() {
    $('h1').toggleClass('red')
    
}

function toggleContent(){
    $('.content').toggle()
}

$().toggle
function addText(){
    
    $('h1').text('Coooool')
}

var counter = 0;
var counterSpan = $('#counter');
/* one way
function increment(){
    counter++
    $('#counter').text("Counter is " + counter)
} */
function increment(){
    counter++
    counterSpan.text(counter) /* oh counterSpan is pointing to counter handle */
}

function roll(){
    $('#roll').toggleClass('roll')
}
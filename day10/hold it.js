function clickHandler(){
 var text =   $('#header').text()
    
    if(text == 2){
        $('#header').text('1');
    } else {
        $('#header').text('2')
    }
    
}

function display(){
    var text = $('#input').val();
    $('#display').text(text);
    $('#input').val(" ")
}

function makeStuff(){
    var content = $('<button></button>')
    content.text('click me')
    content.addClass('btn btn-lg btn-primary')
    $('#target').append(content)
}

function makeABunchOfBlocks(){
    var count = $('#block-count').val()
    
    for(var i = 0; i < count; i++){
        var block = $('<div></div>');
        block.text(i+1);
        block.addClass('block');
        $('#block-target').append(block)
    }
}
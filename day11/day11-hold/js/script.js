$('h1').on("click",function(event){
    $('h1').removeClass('red')
    $(this).toggleClass('red')
});
var stuff = "stuff"
var mystr = `check out this ${stuff}`

$(window).on('keydown',function(event){
    // left 37
    // up 38
    // right 39
    // 40
    if(event.which == 37){
         $('#target').text("left");
    } else if (event.which == 38){
         $('#target').text("up");
    } else if(event.which == 39){
         $('#target').text("right");
    } else if(event.which == 40){
         $('#target').text("down");
    }
    
});


$("#but1").click(function(){
        $(this).hide();
    });

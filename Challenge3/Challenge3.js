
// When the normal button clicked! change the background color to lightblue and text to white and heading to dark blue
//When the rest button clicked! change the background color to white and the text to black

$(document).ready(function(){
    $('#button1').click(function(){
        $('#button1').css("background-color" , "gray");
        $('#button1').css('color', "white");
        $('.Heading').css('color', "darkred");
    });
    $('#button2').click(function(){ 
        $('#button2').css("background-color" , "lightblue");
        $('#button2').css('color', "white");
        $('.Heading').css('color', "darkblue");
    });

    $('#button3').click(function(){ 
        $('#button3').css("background-color" , "white");
        $('#button3').css('color', "blue");
       
    });

});
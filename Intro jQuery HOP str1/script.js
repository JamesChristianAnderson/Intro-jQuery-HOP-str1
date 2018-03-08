$(document).ready(function(){    
    $("#secondDiv").hover(function(){
        $(this).css("background-color","green");
    }, function(){
        $(this).css("background-color","blue");
    });
});
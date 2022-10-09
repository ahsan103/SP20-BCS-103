$(function(){
    $('#submit').click(function (e) { 
        e.preventDefault();
        let value = $('#input').val()
        if(value){
        
            $('#warn').text("");
            $("input").val('');
            $('#list').append('<li>' + value + '</li> ');
        }
        else{
            $('#warn').text("* must be have some task");
        }
    });
})
$( document ).ready(function() {
    console.log( "ready!" );
});
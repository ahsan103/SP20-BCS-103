$(()=>{
    $('#b-text').click(function (e) { 
        e.preventDefault();
        console.log('click')
        $('#i-text').addClass('display');
    });
})
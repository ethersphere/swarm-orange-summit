
$( document ).ready(function() {
    console.log("Hello");
    $('.playButton').click(function(){
        if ($(this).prev().get(0).paused) {
            $('#main').find('video').each(function(){ $(this).get(0).pause(); });
            $(this).prev().get(0).play();
            $(this).prev().get(0).setAttribute('controls', 'controls')
            $(this).hide()
        }
    });  

    $("#friends_link").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#friends").offset().top
        }, 1200);
    });

    $("#agenda_link").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#agenda").offset().top
        }, 1200);
    });

    $("#contact_link").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1200);
    });

});




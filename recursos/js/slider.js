$(document).ready(function(){
    let listaImg = $('#sliderImg img').length;
    let posicionImg = 1;

    $('#sliderImg img').hide();
    $('#sliderImg img:first-child').show(); 

    setInterval(function(){
        if (posicionImg < listaImg ) {
            posicionImg++;
        }
        else {
            posicionImg = 1; 
        }
        $('#sliderImg img').hide();
        $('#sliderImg img:nth-child(' + posicionImg +')').show();
    }, 4000);
})
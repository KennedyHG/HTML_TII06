//alert('oi');
//Interação do Slider (carrosel)
$(document).ready(function () {
    $('#destaque').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false

    });

});

//Interação MENU

function clickMenu(){
    if (itens.style.display == 'block') {
        itens.style.diplay = 'none';
    }
    else {
        itens.style.display = 'block';
    }
};

// var menu = document.getElementById('itens');
// var mostrar = document.getElementById('iconMenu');
// var ocultar = document.getElementById('iconClose');

// ocultar.addEventListener('click', function(){
// menu.style.display = 'none';

// })
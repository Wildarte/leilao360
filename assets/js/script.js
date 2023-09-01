const btn_menu_mobile = document.querySelector('.btn_menu_mobile');
const btn_close_menu = document.querySelector('.btn_close_menu');
const nav_menu = document.querySelector('nav.menu');

btn_menu_mobile.addEventListener('click', () => {
    nav_menu.classList.add('open_menu')
})

btn_close_menu.addEventListener('click', () => {
    nav_menu.classList.remove('open_menu')
})


//====== carousel ========================================================
$(document).ready(function(){
    $(".carousel_top").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        autoplay:true,
        autoplayTimeout:200000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });

    const items_carousel = document.querySelectorAll('.carousel_top article');

    console.log(items_carousel.length);

    items_carousel.forEach((item, index) => {

        if((index % 2)!= 0){

            item.style.width = '80%';
            item.style.margin = 'auto';

            item.querySelector('.info_inner_card_carousel').classList.add('position_right');
        }else{
            item.querySelector('.info_inner_card_carousel').classList.remove('position_right');

        }

    });
});
//====== carousel ========================================================

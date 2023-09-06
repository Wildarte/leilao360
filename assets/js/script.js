const btn_menu_mobile = document.querySelector('.btn_menu_mobile');
const btn_close_menu = document.querySelector('.btn_close_menu');
const nav_menu = document.querySelector('nav.menu');

if(btn_menu_mobile){
    btn_menu_mobile.addEventListener('click', () => {
        nav_menu.classList.add('open_menu')
    })
}

if(btn_close_menu){
    btn_close_menu.addEventListener('click', () => {
        nav_menu.classList.remove('open_menu')
    })
}



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
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3
            }
        }
    });

    const items_carousel = document.querySelectorAll('.carousel_top article');

    console.log(items_carousel.length);

    if(window.matchMedia('(max-width: 1000px)').matches){

    }else{
        items_carousel.forEach((item, index) => {

            if((index % 2)!= 0){
    
                item.style.width = '80%';
                item.style.margin = 'auto';
    
                item.querySelector('.info_inner_card_carousel').classList.add('position_right');
            }else{
                item.querySelector('.info_inner_card_carousel').classList.remove('position_right');
    
            }
    
        });
    }

    window.addEventListener('resize', () => {
        
        if(window.matchMedia('(max-width: 1000px)').matches){

            items_carousel.forEach((item) => {

                item.style.width = "auto"

            });

        }else{
            items_carousel.forEach((item, index) => {
    
                if((index % 2)!= 0){
        
                    item.style.width = '80%';
                    item.style.margin = 'auto';
        
                    item.querySelector('.info_inner_card_carousel').classList.add('position_right');
                }else{
                    item.querySelector('.info_inner_card_carousel').classList.remove('position_right');
        
                }
        
            });
        }
    })

    
});
//====== carousel ========================================================



//========================= page login ====================================
const show_pass = document.getElementById('show_pass');
const field_switch_pass = document.querySelector('.field_switch_pass');

if(show_pass){
    show_pass.addEventListener('click', () => {

        if(field_switch_pass.getAttribute('type') == 'password'){
            field_switch_pass.setAttribute('type', 'text');
            show_pass.querySelector('i').classList.replace('bi-eye-fill','bi-eye-slash-fill')
        }else{
            field_switch_pass.setAttribute('type', 'password');
            show_pass.querySelector('i').classList.replace('bi-eye-slash-fill','bi-eye-fill')
        }
    
    });
}

const show_pass_confirm = document.getElementById('show_pass_confirm');
const field_switch_pass_confirm = document.querySelector('.field_switch_pass_confirm');

if(show_pass_confirm){
    show_pass_confirm.addEventListener('click', () => {

        if(field_switch_pass_confirm.getAttribute('type') == 'password'){
            field_switch_pass_confirm.setAttribute('type', 'text');
            show_pass_confirm.querySelector('i').classList.replace('bi-eye-fill','bi-eye-slash-fill')
        }else{
            field_switch_pass_confirm.setAttribute('type', 'password');
            show_pass_confirm.querySelector('i').classList.replace('bi-eye-slash-fill','bi-eye-fill')
        }
    
    });
}
//========================= page login ====================================


const form_element_cad = document.getElementById('form_element_cad');
if(form_element_cad){
    form_element_cad.getBoundingClientRect().height;
}


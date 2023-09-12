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




//========== page glossario ===========================
const switch_filter_segs = document.getElementById('switch_filter_segs');
const segs_row = document.querySelector('.segs_row');

if(switch_filter_segs){
    switch_filter_segs.addEventListener('click', () => {

        if(segs_row.classList.contains('open_filter_segs')){
            segs_row.classList.remove('open_filter_segs')
        }else{
            segs_row.classList.add('open_filter_segs')
        }
    
    });
}

//========== page glossario ===========================



//================= page buscar imoveis ===================

function createCardSearch(type, address = [], first_leilao = [], second_leilao = [], img_leiloeiro, nome_leiloeiro, desc_leiloeiro, link_imovel){

    let over_card_search = document.createElement('div');
    over_card_search.classList.add('col-md-4', 'over_card_search');
    
    let article = document.createElement('article');
    article.classList.add('card_search')

    let info_card_search = document.createElement('div');
    info_card_search.classList.add('info_card_search');
    info_card_search.innerHTML = `
        <div class="head_card_search d-flex w-100">
            <h5>${type}....</h5>
            <img src="assets/img/star.png" alt="">
        </div>
        <div class="add_card_search">
            <p><small>${address['city']} / ${address['uf']} - ${address['neighborhood']} ${address['number']}</small></p>
        </div>
        <div class="sin_card_search">
            <p>1º leilão R$ ${first_leilao['value']} - ${first_leilao['date']} às ${first_leilao['hour']}</p>
            <p>2º leilão R$ ${second_leilao['value']} - ${second_leilao['date']} às ${second_leilao['hour']}</p>
        </div>`;

    let info_lei = document.createElement('info_lei');
    info_lei.classList.add('bg-abo2','info_lei');
    info_lei.innerHTML = `
        <div class="bg-abo2 info_lei">
            <img src="${img_leiloeiro}" alt="">
            <div class="info_lei_card_search">
                <h5>Leiloeiro:</h5>
                <p>${nome_leiloeiro}</p>
                <hr>
                <p>${desc_leiloeiro}</p>
            </div>
        </div>`;

    let bottom_card_search = document.createElement('div');
    bottom_card_search.classList.add('col-12', 'over_btn_carousel', 'd-flex');
    bottom_card_search.innerHTML = `<a href="${link_imovel}" class="btn_orange mobile_margin_auto text-uppercase w-100">Ver Imóvel</a>`;

    article.append(info_card_search);
    article.append(info_lei);
    article.append(bottom_card_search);

    over_card_search.append(article);

    return over_card_search;

}

let count_cards = 0;
function createFilterCard(cat){

    count_cards++;

    let cat_filter = document.createElement('article');
    cat_filter.classList.add('cat_filter');

    let divId = 'card'+count_cards;
    cat_filter.setAttribute('id', divId);
    cat_filter.setAttribute('onclick', 'removeFilter("'+divId+'")');

    cat_filter.setAttribute('date-filter', cat)

    cat_filter.innerHTML = `<i class="bi bi-x"></i><p>${cat}</p>`;

    return cat_filter;

    
    
}
console.log('count_cards: '+count_cards);

console.log(createCardSearch());

var xhr = new XMLHttpRequest();
var url = 'http://localhost/sites/leilao360/response.php';

function loadContentFilter(){

    if(document.querySelector('.container_cards_search')){
        document.querySelector('.container_cards_search').innerHTML = ' <div class="loader-circle"></div>';

        try {
            
        } catch (error) {
            
        }

        xhr.onload = function() {

            if (xhr.readyState === 4 && xhr.status === 200) {

                document.querySelector('.container_cards_search').innerHTML = ' ';

            var data = JSON.parse(xhr.responseText);
        
            console.log(data.results);
        
            let result_imoveis = data.results;
        
            console.log('imóveis encontrados: '+result_imoveis.length);
        
            result_imoveis.forEach((element, index)=> {

                    let leiloes = result_imoveis[index]['leiloes'];

                    console.log('qtd leiloes: '+leiloes.length);
        
                    //console.log('dentro do loop: '+element['address']); //teste
                    //console.log('decription leiloeiro: '+element['leiloeiro']['description']); //teste
                    //console.log('leiloes: '+ element['leiloes'][1]['date']); //teste
            
                    let elemento_card_search = createCardSearch(element['type'], element['address'], element['leiloes'][0], element['leiloes'][1], element['leiloeiro']['url_img'], element['leiloeiro']['name'], element['leiloeiro']['description'], element['link_imovel']);
            
                    document.querySelector('.container_cards_search').append(elemento_card_search);

                    console.log('index: '+index);
                    //console.log('leiao 1 value: '+element['leiloes'][0]['value'])

                    const total_results = document.getElementById('total_results');
                    if(total_results) total_results.innerHTML = result_imoveis.length
                    

            });
        
            }else{
            console.log('errr');
            }
        };
        
        xhr.open('GET', url, true);
        xhr.send();
    }
}

loadContentFilter();


const form_search_inputs = document.querySelectorAll('.form_filter_sidebar input');
const form_check_label = document.querySelectorAll('.form_filter_sidebar .form-check-label');

form_search_inputs.forEach((item) => {

    item.addEventListener('change', () => {

        console.log('valor: ', item.value);

        item.disabled = true;

        document.querySelector('.filters_card').append(createFilterCard(item.value));

        /*
        form_search_inputs.forEach((item2) => {
            item2.disabled = true
        });
        form_check_label.forEach((item3) => {
            item3.style.opacity = .5
        });]
        */

       loadContentFilter();

    });

});

const cat_filter = document.querySelectorAll('.filters_card .cat_filter');
const filters_card = document.querySelector('.filters_card');

//const array_cat_filter = Array.from(cat_filter)

cat_filter.forEach((item) => {

    item.addEventListener('click', () => {

       item.getAttribute('date-filter');

       console.log('valor do date-filter: '+ item.getAttribute('date-filter'));

    });

});

const btn_clean_filter = document.querySelectorAll('.btn_clean_filter');

btn_clean_filter.forEach((item) => {

    item.addEventListener('click', () => {

        form_search_inputs.forEach((item2) => {
            item2.checked = false;
            item2.disabled = false;
        });
        document.querySelector('.filters_card').innerHTML = ""

    });

});


function removeFilter(divId){
    
    let el = document.getElementById(divId);
    let date_filter = el.getAttribute('date-filter');
    filters_card.removeChild(el);

    loadContentFilter();

    form_search_inputs.forEach((item) => {
        if(item.value == date_filter){
            item.checked =  false;
            item.disabled = false;
        }
    });
}



//================= page buscar imoveis ===================


//===================== animation circle =================================================
const circles = document.querySelectorAll('.circle');

circles.forEach((item) => {

  let contador = 0;

  if(isOnScreen(item)){
    function aumentarContador() {

        let value = item.querySelector('.inner-circle').getAttribute('data-number');
    
        let value_ms = Math.round((1000/400)*value);
    
        console.log('value calc: '+value_ms);
    
        item.querySelector('.circle-right').style.animation = "gira_right "+value_ms+"ms linear forwards"
        item.querySelector('.circle-left').style.animation = "gira_right "+value_ms+"ms linear forwards "+value_ms+"ms";
        item.querySelector('.circle-left .after').style.animation = "transpa 0s linear forwards "+value_ms+"ms";
        item.querySelector('.circle-left .before').style.animation = "color_red 0s linear forwards "+value_ms+"ms";
    
        if (contador < value) {
          contador++;
          item.querySelector('.inner-circle').innerHTML = contador
          setTimeout(aumentarContador, (1000/value)); // Aumenta a cada segundo (1000 ms)
        } else {
        }
        console.log('calc: '+ (1000/value)*value);
      }
    
      aumentarContador();
  }
  
});

addEventListener('scroll', () => {

    circles.forEach((item) => {

        let contador = 0;
      
        if(isOnScreen(item) && !item.classList.contains('already_show')){

            item.classList.add('already_show');

          function aumentarContador() {
      
              let value = item.querySelector('.inner-circle').getAttribute('data-number');
          
              let value_ms = Math.round((1000/400)*value);
          
              console.log('value calc: '+value_ms);
          
              item.querySelector('.circle-right').style.animation = "gira_right "+value_ms+"ms linear forwards"
              item.querySelector('.circle-left').style.animation = "gira_right "+value_ms+"ms linear forwards "+value_ms+"ms";
              item.querySelector('.circle-left .after').style.animation = "transpa 0s linear forwards "+value_ms+"ms";
              item.querySelector('.circle-left .before').style.animation = "color_red 0s linear forwards "+value_ms+"ms";
          
              if (contador < value) {
                contador++;
                item.querySelector('.inner-circle').innerHTML = contador
                setTimeout(aumentarContador, (1000/value)); // Aumenta a cada segundo (1000 ms)
              } else {
              }
              console.log('calc: '+ (1000/value)*value);
            }
          
            aumentarContador();
        }
        
      });
});

function isOnScreen(el){
    let rect = el.getBoundingClientRect();
    return rect.top > 0 && rect.bottom < window.innerHeight;
}
//===================== animation circle =================================================

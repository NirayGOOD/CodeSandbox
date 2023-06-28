left = -256;
const burger_move = document.querySelector('.navigation__nav');

document.querySelector('.logo_burger').addEventListener('click', function() {
    left += 256;
    if(left > 0){
        left = -256
    }
    burger_move.style.left = left + 'px';
});


const tabsBtn = document.querySelectorAll(".sec-2__buttons__div__btn");
const tabsItems = document.querySelectorAll(".sec-2__text");


tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);


        tabsBtn.forEach(function(item) {
            item.classList.remove('active');
        });

        tabsItems.forEach(function(item) {
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});


let offset = 0;
const sliderLine = document.querySelector('.slider_line');

document.querySelector('.slide_btn_next').addEventListener('click', function() {
    offset += 256;
    if( offset > 512){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('.slide_btn_prev').addEventListener('click', function() {
    offset -= 256;
    if( offset < 0){
        offset = 512;
    }
    sliderLine.style.left = -offset + 'px';
});

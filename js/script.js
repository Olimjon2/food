let openBtn = document.querySelector('.header__bar'),
    closeBtn = document.querySelector('.close__icon'),
    content = document.querySelector('.header__nav-content');

function open(btn, show, hide) {
    btn.addEventListener('click', function(){
        show.style.display = 'flex';
        hide.style.display = 'none'
    })
}
open(openBtn,content,openBtn);
open(closeBtn, openBtn, content )


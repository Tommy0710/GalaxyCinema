
// thao tác khi check vào đăng nhập

window.addEventListener('load', function(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const body = document.body;
    const signs = $$('.both-sign')
    const close = $('.close_icon')
    const sign = $('.logIn');
    const form = $('.form');
    const bothSign = $$('.both-sign')
    const bothSignClick = $('.both-sign.changeColor')
    const lines = $('.line3')
    const boxForms = $$('.box_form');
    const box = $('.box')
    console.log(box)
    lines.style.left = `${bothSignClick.offsetLeft}px`
    lines.style.width = `${bothSignClick.offsetWidth}px`

    bothSign.forEach((element, index) => {
        const boxForm = boxForms[index]
        const signss = signs[index]
        element.onclick = function() {
            $('.both-sign.changeColor').classList.remove('changeColor')
           this.classList.add('changeColor')

           lines.style.left = `${element.offsetLeft}px`
           lines.style.width = `${element.offsetWidth}px`

           $('.box_form.activeShow').classList.remove('activeShow')
           boxForm.classList.add('activeShow')
      
           if(signss.innerText === `ĐĂNG KÝ`) {
             box.style.marginTop = "140px"
           }else{
             box.style.marginTop = "0px"
           }
        }
    });

    sign.onclick = function() {
        form.style.display = 'flex';
        body.style.overflow = 'hidden'
    }
    close.onclick = function() {
        form.style.display = 'none'
        body.style.overflow = 'scroll'

    }

})
window.addEventListener('load', function(){
  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)

  const text = $$('.menu_res-item')
  const links = $$('.menu_res-link')
  const choses = $$('.chose-res')

  
  links.forEach((element, index) => {
    const chose = choses[index]
    element.onclick = function(){
        $('.menu_res-link.hover').classList.remove('hover')
        $('.chose-res.visible2').classList.remove('visible2')


        this.classList.add('hover')
        chose.classList.add('visible2')
    }
  })
})
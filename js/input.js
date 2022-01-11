// thao tác của form chọn theo phim theo rạp theo ngày 

window.addEventListener('load', function(){
    var links = document.querySelectorAll('.menu-link')
    function hoverLink2(){
      links.forEach((items) => 
      items.classList.remove('active2'));
      this.classList.add('active2')
    }
     links.forEach((items) => 
     items.addEventListener('click', hoverLink2)
     );
 

  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)

  const text = $$('.input > .menu .menu-item')
  const choses = $$('.chose')
 
  text.forEach((active, index) => {
    const chose = choses[index]
     active.onclick = function() {
       $('.menu-item.active').classList.remove('active')
       $('.chose.visible').classList.remove('visible')
       
       this.classList.add('active')
       chose.classList.add('visible') 
     } 
  })
})
  // function visible(){
  //   choses.forEach(function(e) {
  //     console.log(e)
  //   })
  // }

  // text.forEach((items) => 
  // items.addEventListener('click', visible)
  // );

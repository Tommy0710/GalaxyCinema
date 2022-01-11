
// thực hiện thao tác bấm vào phim đang chiếu và phim sắp chiếu ở listFilm.scss

window.addEventListener('load', function(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document)
    
    const itemsActive = $('.content.activee')
    const lines = $('.line')
    lines.style.left = `${itemsActive.offsetLeft}px`
    lines.style.width = `${itemsActive.offsetWidth}px`
    var items = $$('.content');
    var films = $$('.current');
    items.forEach((item, index) => {
      const film = films[index]
      item.onclick = function() {
        $('.content.activee').classList.remove('activee')
        this.classList.add('activee');

        lines.style.left = `${item.offsetLeft}px`
        lines.style.width = `${item.offsetWidth}px`

        $('.current.active-list').classList.remove('active-list')
        film.classList.add('active-list');
      }
    });
    // var films = document.querySelectorAll('.current')
    // var items = document.querySelectorAll('.content')
    // function hoverLink(){
    //   items.forEach((items) => 
    //   items.classList.toggle('active'));
    // }
    // items.forEach((items) => 
    //  items.addEventListener('click', hoverLink)
    //  );
    // function activeFilms(){
    //   films.forEach((film) => 
    //   film.classList.toggle('active-list'));
    // }
    // items.forEach((items) => 
    //  items.addEventListener('click', activeFilms)
    //  );

})

// thao tác khi click vào nút pause hiện ra pop up video


const icon_watch = document.querySelectorAll('.icon_watch')
const ytb = document.querySelector('.ytb');

const close = document.querySelector('.icon-close')
const body = document.body;





  var List = [
       {
           id: 1,
           nameFilm: 'GALAXY',
           path: `https://www.youtube.com/embed/8I1KOJTmuh4`
       },
       {
           id: 2,
           nameFilm:' ENTERNALS',
           path: `https://www.youtube.com/embed/0WVDKZJkGlY`
       },
       {
           id: 3,
           nameFilm: `Vùng đất câm lặng phần 2`,
           path: `https://www.youtube.com/embed/Y1Dt2B75hWc`
       },
       {
           id: 4,
           nameFilm: 'VENOM',
           path: `https://www.youtube.com/embed/-FmWuCgJmxo`
       },
       {
           id: 5,
           nameFilm: 'SHANG-CHI',
           path: `https://www.youtube.com/embed/giWIr7U1deA`
       },
   ]

   icon_watch.forEach((pause, index) => {
    var list = List[index]
    var htmls =
           `
     <h4 class="fadeInDown2">${list.nameFilm}</h4>
     <div class="ytb_traler fadeInDown2">
     <iframe width="0" height="0" src="${list.path}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
           `
    pause.addEventListener('click', function() {
        ytb.innerHTML = htmls
        close.style.display = 'block'
        body.style.overflowY = 'hidden'
    })
    close.addEventListener('click', function() {
        ytb.innerHTML = ''
        close.style.display = 'none'
        body.style.overflowY = 'visible'
    })
})




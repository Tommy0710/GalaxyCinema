
// menu lúc responsive 


var nav = document.querySelector('.sideBar');
var toggle = document.querySelector('.menu_toggle');
function active(){
    toggle.classList.toggle('active');
}
function show(){
    nav.classList.toggle('show');
}
toggle.addEventListener("click",active);
toggle.addEventListener("click",show);


const menu = document.querySelector(".menuToggle");
const navigator = document.querySelector(".navigation");

menu.onclick = function(){
    navigator.classList.toggle('open');
}

const lista = document.querySelectorAll(".list");
function  activarLink(){
    lista.forEach((item)=>
    item.classList.remove('active'))
    this.classList.add('active')
}
lista.forEach((item)=>
item.addEventListener('click', activarLink)
)

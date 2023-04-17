"use strict";

var menu = document.querySelector(".menuToggle");
var navigator = document.querySelector(".navigation");

menu.onclick = function () {
  navigator.classList.toggle('open');
};

var lista = document.querySelectorAll(".list");

function activarLink() {
  lista.forEach(function (item) {
    return item.classList.remove('active');
  });
  this.classList.add('active');
}

lista.forEach(function (item) {
  return item.addEventListener('click', activarLink);
});
"use strict";

var display = document.querySelector("#display");
var buttons = document.querySelectorAll("button");
buttons.forEach(function (item) {
  item.onclick = function () {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      var string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText); //encargado de las operaciones.
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "ERROR!";
      setTimeout(function () {
        return display.innerText = " ";
      }, 2000);
    } else {
      display.innerText += item.id;
    }
  };
}); //dark theme

var themeToggleBtn = document.querySelector(".theme-toggler");
var calculator = document.querySelector(".calculadora");
var isDark = true;

themeToggleBtn.onclick = function () {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
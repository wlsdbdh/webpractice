function moveWeb() {
  location.href = "https://pokemonkorea.co.kr/pokedex";
}

const docuE = document.documentElement;
const newCursor = document.getElementById("circularCursor");
let posX = 0;
let posY = 0;

document.addEventListener("DOMContentLoaded", () => {
  document.body.onmousemove = function (e) {
    posX = e.clientX + "px";
    posY = e.clientY + "px";

    newCursor.style.left = posX;
    newCursor.style.top = posY;
  };
});

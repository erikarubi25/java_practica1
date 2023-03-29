var recuadro = document.querySelector("#recuadro");

/*=======================================================
EVENTOS DESDE EL DOM
*Donde el DOM ejecuta la function y el js la declara la función
========================================================*/

function cambiarColor(){
    recuadro.style.background = "pink";
}

/*=======================================================
EVENTOS DESDE EL JAVASCRIPT
*Se hacen con la palabra reservada addEventListener
*========================================================*/

var boton = document.querySelector("#boton");
boton.addEventListener("click", moverCaja)
function moverCaja(){
    recuadro.style.width = "500px";
    recuadro.style.transition = "1s width ease";
}
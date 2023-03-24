/*===========
CICLO FOR
Lleva dentro de los paréntesis parámetros: el primero es una variable que puedo iniciar desde donde yo quiera por lo general lleva la letra i q significa indice y preferible comenzar desde 0, luego se separa con punto y coma para ejecutar el segundo parametro donde se indica el limite del ciclo, despues se pide que el indice se incremete de a una unidad;
y luego dentro de las llaves se ejecutan las tareas
=============*/

//Ejemplo ciclo For interactuando con el DOM
//Revisar porque no se me muestra
var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);

for(var i = 0; i < cajas.length; i++){

    cajas[i].style.width = "50px";
    cajas[i].style.heigth = "50px";
    cajas[i].style.background = "blue";
    cajas[i].style.marginTop = "5px";
}

for(var i = 1; i <= 5; i++){
    console.log("i", i);
}

/*===========
CICLO WHILE
Se crea una variable por fuera
Si se coloca la consola después del incremeto empezará a contar desde el incremento obteniendo otro en el ejemplo de ser asi empieza desde el 2, y si se coloca la consola antes del incremento empieza a mostrar desde el 1 como lo pide la variable
=============*/
var n = 1;
while(n <= 5){
    console.log("n", n);
    n++;
}

/*===========
CICLO DO WHILE

=============*/
var p = 1;
do{
    console.log("p", p);
    p++;
}
while(p <= 5);

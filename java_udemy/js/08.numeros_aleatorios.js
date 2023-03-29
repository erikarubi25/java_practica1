var numeroAleatorio = document.querySelector("#numeroAleatorio")

/*=======================================================
NÚMEROS ALEATORIOS
El objeto Math permite realizar tareas matemáticas en los números.
***Math.random = devuelve un número aleatorio entre 0 (incluyéndolo), y 1 (excluído) es decir dara un número 0.9999999 decimales sin llegar al entero
***Math.floor= redondea al número menor del decimal 8.3 = 8
***Math.ceil = redondea al número mayor del decimal 8.5 = 9
***Math.round =redondea el núm X y lo devuelve a su num entero mas proximo 3.6 =4 por arriba del .5 sino seria 3
========================================================*/

//numero = Math.random();
//numero = Math.random()*10; //El número decimal empieza aparecer con un número adicional
//numero = Math.random()*100; //Al multiplicar por 100 se corre un decimal a la derecha
//Agregando el Math.floor nos va a redondear al num menor del decimal
//numero = Math.floor(Math.random()*10); //redondea del 0 al 9,0 cuenta del 0 y no llega a 10

//numero = Math.ceil(Math.random()*10); //su numero mayor 10
numero = Math.round(Math.random()*10);
numeroAleatorio.innerHTML = numero;
var tiempo = document.querySelector("#tiempo");
var segundos = 0;

/*=======================================================
SET INTERVAL (Intervalo de tiempo)
el tiempo se mide en milisegundo si queremos q la funcion se ejecute en 1 segundo debemos colorcar 1000
Se escribe como si fuera una función y dentro hay dos parámetros:
setIntervalo(función, tiempo)
inner: Insertar
Le decimos el tiempo que dura la función
En la variable se almacena una función
========================================================*/
var intervalo = setInterval(function(){
    segundos++;
    tiempo.innerHTML = segundos; //Los números se incrementan reemplazando
//En este caso se incrementan pero no se reemplazan se colocan alado
    //tiempo.innerHTML += segundos;

},1000)

/*=======================================================
SET TIMEOUT (Retardo de tiempo)
setTimeout(función, tiempo)
En este caso es que se ejecuta la función y le decimos en que momento queremos que se ejecute.
El ejemplo se ejecuta una sola vez pero sucedera despues de los 5seg
========================================================*/

setTimeout(function(){
    // alert("Se cumplió el tiempo")

    clearInterval(intervalo); //Se inicia en la funcion de la lin 13 con ésta linea se detiene al llegar al 5seg
},5000)

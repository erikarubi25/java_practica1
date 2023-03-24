/* FUNCIONES SIN PARÁMETRO
Se escriben en dos "cuerpos", la primera es cuando se DECLARA la función (que tareas voy a ejecutar), y el segundo cuerpo es cuando se EJECUTA la función (cuando se está realizando la tarea) los nombre de las funciones deben ser escritas como en las variables minus y en caso de ser mas usar guión bajo o escritura camello
*/
var globales = 10;  //Se declara fuera de la función
console.log("globales: ", globales);


//Declaramos la función
function saludo(){
    //Tarea de la función
    console.log("saludo","hola que tal")
}

//Ejecutamos la función
saludo();

/*FUNCIONES CON PARÁMETROS
Nos permiten enviar valores dentro de los paréntesis, estos se llaman parámetros, que se construyen dentro del paréntesis de la función; y se le da valor a los parámetros cuando se esté ejecutando la función.
Así estas funciones se vuelven dinámicas ya que, no siempre son la misma tarea y mismo resultado; sino que, con la misma tarea puedo obtener varios resultados
*/
function operacion(digito1, digito2){
    var resultado = digito1 + digito2;
    globales = resultado;   //funcion global q cambiara su valor respecto a la funcion
    console.log("globales_operacion: ", globales);
    console.log("resultado: ", resultado);
}
operacion(5,7);
operacion(3,2);

/*FUNCIONES CON RETORNO SIN PARÁMETROS
Son funciones que retornan valores, osea dan valor a la función y poder usar el valor por fuera en alguna otra tarea */

function retorn1(){
    var numero = 5;
    return numero;
}
console.log(retorn1());

/*FUNCIONES CON RETORNO SIN PARÁMETROS
El valor se vuelve dinámico
***Cuando se declara una variable dentro de una función se conoce como variable local, es decir es una variable q solo funciona dentro de la función, solo nos da un resultado cuando se ejecuta la tarea de esa función
*/

function retorn2 (numero){      //variable local al ser declarada dentro de una función
    return numero;
}
console.log(retorn2(3));
console.log(retorn2(13));
console.log(retorn2(23));

/*
Además de las variables locales y las ya mencionadas en el archivo de /js/02.variables.js existen las variables globales se pueden utilizar en cualquier función mismas que cambian su valor, estas se crean al inicio ejem en linea 4;agregando una consola para ver los resultados que nos regresa; se puede usar sin hacer uso de la palabra reservada var sino simplemente llamarla por el nombre asignado al hacer esto toma el valor que dependa de lo que se haya solicitado en la funcion tal es el ejem linea 21; adquiriendo asi un nuevo valor.
*/
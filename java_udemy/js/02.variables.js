// === VARIABLES === //

/* Variables numéricas

variables
    var
Nombre de variables, no iniciar con MAYU, caracter especial o num, usar solo MINU;
en caso que el nombre lleve dos palabras la primera mins y la segunda pegada iniciado en mayus (escritura camello) ó guion bajo
    nombre
    nombreVariable ó nombre_variable
*/
var numero = 2;
console.log("numero: ", numero);

/* Variables de texto
son las llamadas strings
*/
var palabra = "palabras";
console.log("palabra: ", palabra);

/* Variables Booleanas (true ó false)
Son las que dan valor falso o verdadero
*/
var boleana = true;
console.log("boleana: ", boleana);

/* Variables de tipo Arreglo (array)
Nos permiten almacenar mas de una información, incluyendo variables existentes
la cantidad de elementos dentro de los corchetes que nos devuelve son llamados indices y se inician desde 0 siendo esto que si quiero que solo me muestre el color rojo y el valor de la var palabra debo de solicitar en consola con corchetes los indices que quiero ver
*/
var colores = ["rojo", "amarillo", boleana, "5", palabra];
console.log("colores: ", colores [0]); // Para muestrar dos indices como cual seria la sintaxis?

/* Variables de tipo objeto (object)
Son mas usadas en la progrm orientada a objetos con js
Object contiene la propiedad y el valor
Las propiedades no es necesario ponerlas con comillas la sintaxis sigue siendo correcta
*/
var  jugo = {"ingrediente1": "fresa",
              ingrediente2 : "mandarina",
              ingrediente3 : "banano",}
console.log("jugo: ", jugo); //Nos muestra todos los ingredientes (propiedades)
console.log("jugo: ", jugo.ingrediente1); // despues de la variable se agrega punto seguida de la propiedad y nos devuelve unicamente el valor de esa propiedad

/* Variables DOM (Modelo de Objetos del Documento)
El DOM es la estructura de objetos que genera el navegador cuando se carga un documento y se puede alterar  mediante Javascript para cambiar dinámicamente los contenidos y aspectos de la página
*/
var caja = document.querySelector("#caja");
console.log("caja: ", caja);
// De la siguiente manera se interactúa con los objetos del HTML
caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

var cajas = document.querySelectorAll(".cajas");
console.log("cajas: ", cajas);

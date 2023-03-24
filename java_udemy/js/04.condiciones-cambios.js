/* =======================
    CONDICIONES
============================
Nos ayudan a diferenciar lo que puede suceder entre dos variables (informaciones )
*/

var a = 5;
var b = 10;

//(Si) Se hace una petición con "if", es la condición de si pasa algo debe devolver lo solicitado
if (a > b) {
    console.log ("a es mayor a b")
}
//(Si no) en caso de no cumplir la primera petición de if se coloca "else if" diciendo si pasa esto o si pasa esto otro entonces haz lo siguiente
else if(a == b){
    console.log("a es lo mismo que b")
}
//Para cerrar la cadena de condición se debe incluir el "else", es decir debe dar una ultima solución para finalizar
else{
    console.log("a no es lo mismo que b, y a es menor que b")
}
//En caso que se use else if se debe de completar: if-> else if--> else, de lo contrario solo puede agregarse un if, o se puede acompletar con else: if --> else

/*============
CAMBIOS
==============
Se usan para evitar muchos else if
Para crear un cambio se usan la palabra reservada switch, dentro del switch se hacen "preguntas"
las "preguntas" se hacen en forma de casos usando la palabra reservada case
para el ejemplo siguiente se pregunta si dia es igual sabado se jecuta una tarea en este caso consola, la tarea se coloca despues de : (dos puntos), y al final se cierra (rompe) el caso con la palabara reservada break
y para romper una serie de casos (como en el if se usa else) aqui se usa el default
*/

var dia = "lunes";
switch(dia){

    case "sabado":
    console.log("voy a estudiar php");
    break;
    case "martes":
    console.log("voy a estudiar css");
    break;
    case "jueves":
    console.log("voy a estudiar html");
    break;
    case "domingo":
    console.log("voy a descansar");
    break;
    default:console.log("voy a estudiar javascript");

}
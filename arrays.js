/**
 * ARRAYS
 */

//cada objeto dentro del array corresponde a un indice, y se cuenta desde 0
//juan = 0
//maite = 1
//nori = 2
//tina = 3

// la cantida de elementos de un array pueden ser 1,2, 100, 200...
var nombres = ["juan", "maite","nori","tina"];
//esta dos formas son validas para crear un array
var vegetales = new Array("tomate", "papa", "lechuga", "zanahoria");

//asi se llaman a los elementos dentro de un array
// console.log(nombres[0]); 

// console.log(vegetales[3]);

//esta es la forma de modificar los elementos de un array 

// nombres[0] = "lupita";
// vegetales[3] = "puerro";

// console.log(nombres[0]);
// console.log(vegetales[3]);

// la propieda length nos devuelve la cantidad de elementos de una array
/*console.log(nombres.length); //metodo para recorrer un arreglo
for (let i = 0; i <= nombres.length - 1; i++) {
    console.log(nombres[i]);  
}

// es otra forma de recorrer los elementos de una array
vegetales.forEach(function(elemento, indice) {
    console.log(elemento, indice); // se crear un funcion con el parametro "elemento", para cada elemetro dentro de esa array, y luego se imprime por consola
}) */

//la propieda .push lo que hace es agregar un nuevo elementro al array, al final. 
console.log(nombres);
nombres.push("pedrito");
console.log(nombres);

//la propieda .unshift lo que hace es agregar un nuevo elementro al array, pero al comienzo.
nombres.unshift("spreen");
console.log(nombres);

//la propieda .pop lo que hace es eliminar el ultimo elemento de un array.
nombres.pop();
console.log(nombres);

//la propieda .shift elimina el primer elemento de un array
nombres.shift();
console.log(nombres);

//la propìedad .indexOf expresa la indice en el que se cuentra tal elemento dentro de un array.

//para eso hay que crear un variable donde se guarde el dato del indice

var pos = nombres.indexOf("maite")
console.log(pos);

//la propieda .splice lo que hace es eliminar un elemento especifico dentro de un array, por su indice

//(1, 1) en el primer 1, lo que hace es pararse en el indice maracado, y luego borra la cantida de elementos marcados
//en este caso se para en el indice 1 y borra un el elemento

vegetales.splice(1, 1);
console.log(vegetales);

//en este caso lo que hace es pararse en el indice 1 y apartir de ese eliminar el suguiente 
vegetales.splice(1, 2);
console.log(vegetales);
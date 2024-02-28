//Uso de variables
/*var nombre = 'Grover';
console.log(nombre);
console.log(typeof(nombre));

var edad = 34;
console.log(edad);
console.log(typeof(edad));

edad = 'Cinco';
console.log(edad);
console.log(typeof(edad));

var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);

puestoDeTrabajo = null;
console.log(puestoDeTrabajo);
**********************************/

/*************
 * Operadores matemáticos +, -, *, /
 */

 /*var edadAna, edadMaria, diferenciaEdad;
 var sumaEdades, yearAna, yearMaria, yearActual;

 edadAna = 34;
 edadMaria = 28;
 yearActual = 2019;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nació Ana ' + yearAna);
console.log('Año en que nació María ' + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2)*/

/****
 * Operadores Lógicos, unarios y de asignación
 */
//Lógicos < > <= >= ==
// var edadAna, edadMaria, diferenciaEdad;
// edadAna = 34;
// edadMaria = 28;

// var mayorAna = !(edadAna == edadMaria);
// console.log(mayorAna);

// //Unarios, ++Incremento, --Decremento
// //edadAna++;
// console.log(++edadAna);
// console.log(edadAna);

// //Asignación, +=, -=, *=, /=, %=
// var a = 12;
// var b = 5;

// var c = a % 5; //Residuo o resto de una división
// console.log(c);
// a += b;
// console.log(a);


/****
 * Sentencia If...Else
 */

// var nombre = "Juan";
// var esCasado = false;

// if (esCasado == true){
//     console.log(nombre + " es casado");
// } else {
//     console.log(nombre + " es soltero");
// }

// var nombre = "Juan";
// var edad = 94;

// si edad es menor a 12 es un niño
//si es mayor a 11, menor a 18, es un adolecente
//si es mayor a 17, menor a 60, es un adulto
//si es mayor a 60, es un anciano

// if (edad < 12){
//     console.log(nombre + " es un niño");
// } else if ((edad > 11) && (edad < 18)){
//     console.log(nombre + " es un adolecente");
// } else if ((edad > 17) && (edad < 60)){
//     console.log(nombre + " es un adulto");
// } else {
//     console.log(nombre + " es un anciano");
// }

/****
 * Sentencia Switch
 */

// var mes = 2; /* con la sentencia switch se evalua cado una de los casos (case), si alguno de los 4 casos en ejemple es IGUAL al valor que se muestra en la variable mes
// la sentencia dentro del caso correcto se mostrara por la consola*/

// switch(mes){
//     case 1:
//         console.log("enero");
//         break;
//     case 2:
//         console.log("febrero"); // en este caso la variable es IGUAL a 2, como el caso vale 2, se muestra por consola "febrero".
//         break;
//     case 3:
//         console.log("marzo");
//         break;
//     case 4:
//         console.log("abril");
//         break;
//     default:
//         console.log("mes no encontrado"); // en todo caso que no sea igual a ninguno de los casos, se mostrara la sentencia dentro de default.
// }

/****
 * Sentencia For
 */

// for (var i=1; i<=100; i++){ //se utilizar para generar bucles y ahorra codigo, es uno de incremento de 1 en 1 hasta llegar a 100
//     console.log(i);
// }   /* la primera parta se inicializa una variable para tener un punto de partida, la segunda es un fin al bucle, para que no sea infinito y la tercera parte es de cuanto queremos que avance el bucle*/

// for (var i=100; i>=1; i--){ //se utilizar para generar bucles y ahorra codigo, es uno de decremento de 1 en 1 hasta llegar a 1
//     console.log(i);
// }

/****
 * Sentencia While
 */

//lo que hace el while es que la variable i comienza en 1, evalua la condicion de del while, mientras se cumpla es condicion va a cumplir con lo que esta dentro de la   sentencia, imprimiendo por pantalla el valor de i que 1, y luego va incrementar 1, por lo que se va a ir sumando  de 1 en 1 hasta llegar a 10, y cuando valga 10 termine
// var i = 1;
// while(i <=10){
//     console.log(i); 
//     i++
// }

/****
 * Sentencia Do While
 */

// var i = 1;

// do{
//     console.log(i);
//     i++
// } while(i <=10 )


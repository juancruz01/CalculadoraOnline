function mensaje() {
    console.log("Mensaje desde la funcion");
}

mensaje();

//FORMAS DE USAR LAS FUNCIONES EN JAVASCRIPT
 
function sumar(a, b, c) {
    return a + b + c
}
var result = sumar(4, 2, 2);
console.log(result);


var sumar = function (a, b, c=3) {
    return a + b + c
}

var result = sumar(4, 5 ,8);
console.log(result);

var resta = function (x, y) {
    return x - y
}

var point = resta(10, 5);
console.log(point); 

/********** 
 * FUNCIONES RECURSIVAS
*/

var factorial = function(n) {
    if((n == 0) || (n == 1))
        return 1;
    else
        return(n * factorial(n-1));
}

console.log(factorial(5));
const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonIgual = document.getElementsByName("data-igual") [0];
const botonDelete = document.getElementsByName("data-delete") [0];
let result = document.getElementById("result");
let opeActual = "";
let opeAnterior = "";
let operacion = "";

//CADA VEZ QUE SE HAGA CLICK EN UN NUMERO SE MUESTRO POR EL DISPLAY
botonNumeros.forEach(function (boton) {
    boton.addEventListener("click", function () {
        agregarNumero(boton.innerText);
    })
})

//CADA VEZ QUE SE HAGA CLICK EN UN OPERADOR SE SELECCIONARA
botonOpera.forEach(function (boton) {
    boton.addEventListener("click", function () {
        selectOperacion(boton.innerText);
    })
})

//MUESTRA EL RESULTADO LUEGO DE CALCULAR LAS OPERACION Y LIMPIA EL INPUT DONDE SE MUESTRAN LOS DATOS
botonIgual.addEventListener("click", function () {
    calcular();
    actualizarDisplay();
})

//LIMPIA EL INPUT DONDE SE MUESTRAN LOS DATO DE LA CALCULADORA
botonDelete.addEventListener("click", function () {
    clear();
    actualizarDisplay();
})

function selectOperacion(op) {
    if(opeActual === "") return;
    if(opeAnterior !== ""){
        calcular();
    }

    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = "";
}

function calcular(){
    let calculo;
    const  anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);

    if(isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "X":
            calculo = anterior * actual;
            break
        case "/":
            calculo = anterior / actual;
            break;
        default:
            return;
    }

    opeActual = calculo;
    operacion = undefined;
    opeAnterior = "";
}

//CONCATENA LOS NUMERO DE LOS BOTONES EN LOS QUE SE HAGA CLICK POR EL DISPLAY
function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear() {
    opeActual = "";
    opeAnterior = "";
    operacion = undefined;
}


function actualizarDisplay() {
    result.value = opeActual;
}

clear();


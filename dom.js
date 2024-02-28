var boton = document.getElementById("boton");
console.log(boton);

boton.addEventListener("click", mensaje);

function mensaje() {
    alert("mensaje");
}
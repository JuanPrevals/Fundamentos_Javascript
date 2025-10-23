console.log("Conexion JS establecida!")


function counter() {
    let resultado = "El resultado es: ";
    let contador = 10;
    while (contador > 0) {
        resultado += ` ${contador}`;
        console.log(contador)
        contador--


    }
    alert(resultado)
}


function bucleFor() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
        resultado += ` ${i}`;
    }
    alert(Resultado)
}


function unoaN() {
    let n = parseInt(prompt("Ingresa un número:"));
    let numero = 1;

    while (numero <= n) {
        console.log(numero)
        alert(numero)
        numero++;

    }
}

function Nauno() {
    let n = parseInt(prompt("Ingresa un número:"));
    let i = n;
    let resultado = "";

    while (i >= 1) {
        resultado += i;
        if (i > 1) {
            resultado += ", ";
        }
        i--;
    }

    alert("Números del " + n + " al 1: " + resultado);
} 

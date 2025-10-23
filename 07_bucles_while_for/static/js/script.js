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
    let resultado = '';
    for (let i = 10; i > 0; i--) {
        console.log(i);
        resultado += ` ${i}`;
    }
    alert(resultado); 
}


// 1️⃣ Bucle while: Imprimir del 1 a n (n es ingresado por teclado).
// Escribe un programa que utilice un bucle while para imprimir los números del 1 al n con un solo Alert.

function unoaN() {
    let n = parseInt(prompt("Ingresa un número:"));
    let numero = 1;

    while (numero <= n) {
        console.log(numero)
        alert(numero)
        numero++;

    }
}


// 2️⃣ Bucle while: Cuenta regresiva del n al 1 (n es ingresado por teclado)
// Crea un programa que muestre una cuenta regresiva desde n hasta 1 utilizando un bucle while.


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


// 3️⃣ Bucle while: Sumar los n primeros números
// Usando un bucle for, calcula la suma de los números n primeros números  muestra el resultado en la consola.

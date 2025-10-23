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

function sumarNumeros() {
    let numero = parseInt(prompt("Ingresa un número:"));
    let suma = 0;
    let contador = 1;
    let resultado = "Suma = 0";
    while (contador <= numero) {
        suma += contador;
        resultado += ` + ${contador} `;
        contador++

    }
    alert(`${resultado} = ${suma}`)
}


// 4️⃣ Bucle while: Imprimir múltiplos de 2 del 1 al n (n es el límite de números a encontrar)
// Escribe un programa que use un bucle for para imprimir los múltiplos de 2 que hay entre 1 y 10 (inclusive).


function multiplosDeDos() {
    let n = parseInt(prompt("Ingresa un número:"));
    let resultado = "Múltiplos de 2 hasta " + n + ": ";

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
            resultado += i + " ";
        }
    }

    alert(resultado);
}
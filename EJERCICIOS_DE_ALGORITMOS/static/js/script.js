
// Ejercicio 1: Datos de una Persona

function mostrarDatosPersona() {
    let nombre = prompt("Ingrese su nombre:");
    let apellidos = prompt("Ingrese sus apellidos:");
    let edad = prompt("Ingrese su edad:");
    alert("Nombre: " + nombre + "\nApellidos: " + apellidos + "\nEdad: " + edad);
}

// | Variable | Valor |
// |-----------|--------|
// | nombre | Juan |
// | apellidos | Pérez López |
// | edad | 25 |



// Ejercicio 2: Operaciones Aritméticas


function operacionesNumero() {
    let numero = parseFloat(prompt("Ingrese un número:"));
    let resultado = ((numero / 3) + 10) * 2;
    alert("El resultado es: " + resultado);
}

// | Variable | Valor |
// |-----------|--------|
// | numero | 9 |
// | resultado | 26 |


// Ejercicio 3: Orden Creciente o Decreciente

function verificarOrden() {
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));
    if (a < b) {
        alert("Estado creciente");
    } else if (a > b) {
        alert("Estado decreciente");
    } else {
        alert("Son iguales");
    }
}

// | Variable | Valor |
// |-----------|--------|
// | a | 4 |
// | b | 7 |
// | Resultado | Estado creciente |


// Ejercicio 4: Promedio de 5 Números

function promedioCinco() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        let num = parseFloat(prompt("Ingrese el número " + i + ":"));
        suma += num;
    }
    let promedio = suma / 5;
    alert("El promedio es: " + promedio);
}


// | Variable | Valor |
// |-----------|--------|
// | i | 1 → 5 |
// | num | 3, 4, 5, 6, 7 |
// | suma | 25 |
// | promedio | 5 |



// Ejercicio 5: Suma de N Primeros Números Naturales

function sumaNaturales() {
    let N = parseInt(prompt("Ingrese N:"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i;
    }
    alert("La suma de los primeros " + N + " números naturales es: " + suma);
}


// | Variable | Valor |
// |-----------|--------|
// | N | 3 |
// | i | 1 → 3 |
// | suma | 6 |


// Ejercicio 6: 100 Primeros Números Pares


function numerosPares() {
    let pares = "";
    for (let i = 2; i <= 200; i += 2) {
        pares += i + " ";
    }
    alert(pares);
}

// | Variable | Valor |
// |-----------|--------|
// | i | 2 → 200 |
// | pares | 2 4 6 ... 200 |


// Ejercicio 7: 100 Primeros Números Impares


function numerosImpares() {
    let impares = "";
    for (let i = 1; i <= 199; i += 2) {
        impares += i + " ";
    }
    alert(impares);
}


// | Variable | Valor |
// |-----------|--------|
// | i | 1 → 199 |
// | impares | 1 3 5 ... 199 |



// Ejercicio 8: Suma de 5 Números


function sumaCinco() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        let num = parseFloat(prompt("Ingrese número " + i + ":"));
        suma += num;
    }
    alert("La suma total es: " + suma);
}


// | Variable | Valor |
// |-----------|--------|
// | i | 1 → 5 |
// | suma | 0 → resultado |



// Ejercicio 9: Suma de N Números


function sumaN() {
    let N = parseInt(prompt("Ingrese cantidad de números a sumar:"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        let num = parseFloat(prompt("Número " + i + ":"));
        suma += num;
    }
    alert("La suma total es: " + suma);
}


// | Variable | Valor |
// |-----------|--------|
// | N | 4 |
// | i | 1 → 4 |
// | suma | 0 → resultado |



// Ejercicio 10: Operaciones con Opción

function calculadora() {
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));
    let opcion = prompt("Elija operación: +, -, *, / ");
    let resultado = "Opción inválida";

    if (opcion === "+") {
        resultado = a + b;
    } else if (opcion === "-") {
        resultado = a - b;
    } else if (opcion === "*") {
        resultado = a * b;
    } else if (opcion === "/") {
        resultado = a / b;
    }

    alert("Resultado: " + resultado);
}



// | Variable | Valor |
// | -----------| --------|
// | a | 8 |
// | b | 4 |
// | opcion | * |
// | resultado | 32 |


// Ejercicio 11: Suma de N Números Pares Ingresados

function sumaPares() {
    let N = parseInt(prompt("Ingrese cantidad de números:"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        let num = parseInt(prompt("Ingrese número par:"));
        if (num % 2 === 0) {
            suma += num;
        }
    }
    alert("La suma de los pares es: " + suma);
}


// | Variable | Valor |
// | -----------| --------|
// | N | 3 |
// | num | 2, 4, 6 |
// | suma | 12 |



// Ejercicio 12: Suma de N Primeros Pares

function sumaPrimerosPares() {
    let N = parseInt(prompt("Ingrese N:"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i * 2;
    }
    alert("La suma es: " + suma);
}



// | Variable | Valor |
// | -----------| --------|
// | N | 3 |
// | suma | 12 |


// Ejercicio 13: Suma de N Números Impares

function sumaImpares() {
    let N = parseInt(prompt("Ingrese cantidad de números:"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        let num = parseInt(prompt("Ingrese número impar:"));
        if (num % 2 !== 0) {
            suma += num;
        }
    }
    alert("Suma total: " + suma);
}

// | Variable | Valor |
// | -----------| --------|
// | N | 3 |
// | num | 1, 3, 5 |
// | suma | 9 |



// Ejercicio 14: Suma de N Primeros Impares


function sumaPrimerosImpares() {
    let N = parseInt(prompt("Ingrese N:"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += (2 * i - 1);
    }
    alert("La suma es: " + suma);
}


// | Variable | Valor |
// | -----------| --------|
// | N | 4 |
// | suma | 16 |


// Ejercicio 15: Suma de N Primeros Múltiplos de 3

function sumaMultiplosTres() {
    let N = parseInt(prompt("Ingrese N:"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i * 3;
    }
    alert("La suma de los múltiplos de 3 es: " + suma);
}


// | Variable | Valor |
// | -----------| --------|
// | N | 3 |
// | suma | 18 |


// Ejercicio 16: Factorial de N

function factorialN() {
    let N = parseInt(prompt("Ingrese N:"));
    let factorial = 1;
    for (let i = 1; i <= N; i++) {
        factorial *= i;
    }
    alert("El factorial de " + N + " es: " + factorial);
}


// | Variable | Valor |
// | -----------| --------|
// | N | 4 |
// | factorial | 24 |


// Ejercicio 17: Conversión de Celsius a Fahrenheit


function convertirCelsiusFahrenheit() {
    let celsius = parseFloat(prompt("Ingrese temperatura en Celsius:"));
    let fahrenheit = (celsius * 9 / 5) + 32;
    alert(celsius + "°C equivalen a " + fahrenheit + "°F");
}

// | Variable | Valor |
// | -----------| --------|
// | celsius | 20 |
// | fahrenheit | 68 |
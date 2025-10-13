console.log("Conexion js establecida...")

// Edad
function edadVotar() { // Declaración de la función llamada edadVotar
    let edad = parseInt(prompt("Ingrese su Edad: ")); // Solicita la edad al usuario y la convierte a número entero

    // Condición if - else if - else
    if (edad >= 18) { // Si la edad es mayor o igual a 18
        alert("Su edad " + edad + " está aprobada para votar."); // Muestra mensaje indicando que puede votar
    } else if (edad >= 0 && edad < 18) { // Si la edad está entre 0 y 17 inclusive
        alert("Su edad " + edad + "no esta aprobada para votar."); // Muestra mensaje indicando que no puede votar
    } else { // Si se ingresa un valor inválido (por ejemplo negativo o no numérico)
        alert("Ingrese un valor válido"); // Muestra mensaje de error
    }
};




// Contraseña valida
function validarPassword() {
    let clave = "1234";
    let pass = prompt("Ingrese su contraseña: ");

    if (pass == clave) {
        alert("Acceso Permitido...");

    } else {
        alert("Acceso Denegado");
    }

}


// Par o impar 
function verificarParImpar() {
    let numero = parseInt(prompt("Ingrese un número: "));

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
    } else if (numero % 2 === 0) {
        alert("Es par");
    } else {
        alert("Es impar");
    }
}


// Temperatura ambiental
function verificarTemperatura() {
    let temp = parseInt(prompt("Ingrese la temperatura actual en °C:"));

    if (isNaN(temp)) {
        alert("Por favor, ingrese una temperatura válida.");
    } else if (temp >= 30) {
        alert("Hace calor");
    } else if (temp <= 5) {
        alert("Hace frio");
    } else {
        alert("Clima agradable");
    }
}



// Comparar Numeros
function compararNumeros() { // Declaración de la función compararNumeros
    let num1 = parseInt(prompt("Ingrese el primer número:")); // Solicita el primer número al usuario y lo convierte a entero
    let num2 = parseInt(prompt("Ingrese el segundo número:")); // Solicita el segundo número al usuario y lo convierte a entero

    if (isNaN(num1) || isNaN(num2)) { // Verifica si alguno de los dos valores no es un número
        alert("Por favor, ingrese números válidos."); // Muestra un mensaje de error si hay un valor inválido
    } else if (num1 > num2) { // Si el primer número es mayor que el segundo
        alert("El primer número (" + num1 + ") es mayor que el segundo (" + num2 + ")."); // Muestra que el primero es mayor
    } else if (num2 > num1) { // Si el segundo número es mayor que el primero
        alert("El segundo número (" + num2 + ") es mayor que el primero (" + num1 + ")."); // Muestra que el segundo es mayor
    } else { // Si ambos números son iguales
        alert("Ambos números son iguales."); // Muestra que los dos números son iguales
    }
}



// Evaluar Nota
function evaluarNota() {
    let nota = parseInt(prompt("Ingrese su nota (entre 1 y 7):"));

    if (isNaN(nota)) {
        alert("Por favor, ingrese un número válido.");
    } else if (nota < 1 || nota > 7) {
        alert("La nota debe estar entre 1 y 7.");
    } else if (nota >= 4) {
        alert("Aprobado");
    } else {
        alert("Reprobado");
    }
}


// Admin
function verificarUsuario() {
    let Usuario = "Admin"
    let user = prompt("Ingrese su Usuario: ");

    if (user == Usuario) {
        alert("Bienvenido administrador");
    } else {
        alert("Usuario no reconocido.")
    }

}


// Empieza con "A" Mayuscula

function verficarLetraMayuscula() {
    let letra = prompt("Ingrese palabra");
    let letraA = "A"
    if (letra[0] == letraA) {
        alert("Tu palabra contiene la letra A");
    } else {
        alert("Tu palabra no empieza ni tiene la letra A mayuscula")
    }
}

function descuentoProducto() {
    let precio = parseFloat(prompt("Ingrese el precio"));

    if (precio >= 10000) {
        let descuento = parseFloat(prompt("Ingrese porcentaje de descuento"));
        let precioDescuento = precio - (precio * descuento / 100);
        let iva = precioDescuento * 0.19;
        let total = precioDescuento + iva;

        alert("Total con descuento e IVA: $" + total.toFixed(2));
    } else {
        let iva = precio * 0.19;
        let total = precio + iva;

        alert("No hay descuento. Total con IVA: $" + total.toFixed(2));
    }
}


// Puede Conducir

function puedeConducir() {
    let edad = (prompt("Ingrese su edad"));
    let licencia = prompt("¿Tiene licencia? (si/no)").toLowerCase(); // toLowerCase hace que siempre sea si, independientemente que use tilde no las use use mayusculas o no ETC..

    if (edad >= 18 && licencia === "si") {
        alert("Puede conducir");
    } else {
        alert("No puede conducir");
    }

}


// Longitud de palabras


function encontrarPalabraLarga() {
    let pal1 = prompt("Ingrese primera palabra");
    let pal2 = prompt("Ingrese segunda palabra");

    // Validación: si ambas están vacías, muestra advertencia y detiene función
    if (pal1 === "" && pal2 === "") {
        alert("Ingrese algún valor para trabajar");
        return; // Detiene la ejecución
    }

    // Comparar longitudes
    if (pal1.length > pal2.length) {
        alert(`La palabra más larga es "${pal1}" con ${pal1.length} caracteres`);
    } else if (pal2.length > pal1.length) {
        alert(`La palabra más larga es "${pal2}" con ${pal2.length} caracteres`);
    } else {
        // Si ambas tienen la misma longitud
        alert(`Ambas palabras tienen la misma longitud: "${pal1}" y "${pal2}" (${pal1.length} caracteres)`);
    }
}




function validarCorreo() {
    let email = prompt("Por favor, ingresar correo:");
    if (email.includes("@")) {
        alert(`El correo ${email} ingresado es valido`);
    } else {
        alert(`El correo ${email} ingresado es invalido`);
    }
}


function validarNumero() {
    let numero = parseInt(prompt("Ingresar número:"));
    if (numero > 0) {
        alert(`el ${numero} es positivo`);
    } else if (numero === 0) {
        alert(`el ${numero} no tiene signo `)
    } else {
        alert(`el ${numero} es negativo`);
    }

}


function saludoSegunHora() {
    let horaActual = parseInt(prompt("Ingresa la hora actual (formato 24 horas):"));
    if (horaActual < 12) {
        alert(`Buenos dias son las ${horaActual} hrs!.`);
    } else if (horaActual >= 12 && horaActual <= 18) {
        alert(`Buenos tardes son las ${horaActual} hrs!.`)
    } else {
        alert(`Buenos noches son las ${horaActual} hrs!.`);
    }
}


function verificarLetraE() {
    let palabra = prompt("Ingresa una palabra:");

    if (palabra.includes("e")) {
        alert("Contiene la letra 'e'");
    } else {
        alert("No contiene la letra 'e'");
    }
}

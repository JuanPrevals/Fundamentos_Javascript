console.log("Conexion JS establecida!")

// 1️⃣ Edad y etapa de vida
// Pide la edad de una persona.
// Si es menor a 13 → “Eres un niño”.


// Si tiene entre 13 y 17 → “Eres adolescente”.


// Si tiene 18 o más → “Eres adulto”.


// 📘 Práctica: uso de rangos con if, else if, else.

function verificarEtapa() {
    let edad = parseInt(prompt("Ingrese su edad: "));

    if (edad < 13) {
        alert("Eres un niño!");

    } else if (edad >= 13 && edad < 18) {
        alert("Eres un adolecente")

    } else {
        alert("Eres un adulto")
    }

}



// Pide una contraseña.
// Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.


// Si no, muestra “Acceso denegado”.


// 📘 Práctica: comparación exacta (===).

function contraValida() {
    let clave = parseInt(prompt("Ingrese su contraseña: "));

    if (clave === 12345) {
        alert("Contraseña Correcta")
    }

    else {
        alert("Contraseña invalida, intente denuevo")
    }
}

// 3️⃣ Verificar letra en palabra
// Pide una palabra.
// Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.


// Si no → “No contiene la letra E”.


// 💡 Usa:
// if (palabra.toLowerCase().includes('e')) { ... }

function verificarLetra() {
    let palabra = prompt("Ingrese su palabra: ");

    if (palabra.toLowerCase().includes('e')) {
        alert("Tu palabra incluye la letra E")

    }

    else {
        alert("Su palabra no incluye la letra e")
    }

}


// Pide dos números con prompt().
// Si el primero es mayor → “El primer número es mayor”.


// Si el segundo es mayor → “El segundo número es mayor”.


// Si son iguales → “Son iguales”.


// 📘 Práctica: comparaciones dobles.

function numeroMayorQue() {
    let num1 = parseInt(prompt("Ingre su primer numero: "));

    let num2 = parseInt(prompt("Ingrese su segundo numero: "));

    if (num1 < num2) {
        alert("El primer numero es mayor que el segundo")
    }

    else (num2 < num1); {
        alert("El segundo numero es mayor que el primero")
    }


}


// 5️⃣ Determinar si el número es par o impar
// Pide un número.
// Si el resto al dividir por 2 (% 2) es 0 → “Número par”.


// Si no → “Número impar”.


// 📘 Práctica: uso del operador módulo %.


function parImpar() {

    let numero = parseInt(prompt("Ingrese su numero: "));

    if (numero % 2 == 0) {
        alert("Tu numero es par :)")
    }

    else {
        alert("Tu numero no es par :/")
    }


}


// 6️⃣ Revisar palabra inicial
// Pide una palabra.
// Si empieza con la letra “A” o “a” → “Empieza con A”.


// Si no → “No empieza con A”.


// 💡 Puedes usar:
// if (palabra[0].toLowerCase() === 'a') { ... }



function primLetra() {
    let palabra = prompt("Ingrese su palabra");


    if (palabra[0].toLowerCase() === 'a') {
        alert("Tu palabra empieza por la letra a")
    }

    else {
        alert("Tu palabra no empieza con la letra a")
    }
}

// 7️⃣ Temperatura ambiente
// Pide una temperatura.
// Si es menor a 10 → “Hace frío”.


// Si es entre 10 y 25 → “Clima templado”.


// Si es mayor o igual a 26 → “Hace calor”.


// 📘 Práctica: comparaciones encadenadas.


function tempAmbiente() {
    let temperatura = parseInt(prompt("Ingresa tu temperatura actual"));

    if (temperatura < 10) {
        alert("Hace frio")
    }

    else if (temperatura >= 10 && temperatura <= 25) {
        alert("Esta templado")
    }

    else if (temperatura > 25) {
        alert("Hace calor");
    }

}


// 8️⃣ Nombre reconocido
// Pide un nombre.
// Si el nombre es “Dany” → “Hola, profesor 👋”.


// Si el nombre es “Ely” → “Hola, mamá 🌷”.


// En cualquier otro caso → “Hola, visitante”.


// 📘 Práctica: varias condiciones exclusivas.



function nombreConocido() {
    let nombre = prompt("Ingrese el nombre: ");

    if (nombre == "Dany") {
        alert("Hola profesor")
    }

    else if (nombre == "Any") {
        alert("Hola mamá")
    }

    else {
        alert("Hola, extraño no te conozco")
    }
}



// 9️⃣ Nota de evaluación
// Pide una nota entre 1 y 7.
// Si es 4 o más → “Aprobado”.


// Si es menor que 4 → “Reprobado”.


// Si está fuera del rango 1–7 → “Nota inválida”.


// 📘 Práctica: validaciones con límites.


function notaValida() {
    let nota = parseInt(prompt("Ingresa tu nota: "));

    if (nota >= 1 && nota < 4) {
        alert("Nota insuficiente, hay que mejorar")

    }

    else if (nota >= 4 && nota <= 7) {
        alert("Aprobaste")
    }

    else {
        alert("Nota invalida, Como te sacaste esa nota?")
    }


}




// 🔟 Verificar si contiene una palabra clave
// Pide una frase.
// Si incluye la palabra “Jesús” (mayúscula o minúscula) → “Tu frase tiene la palabra clave 🙌”.


// Si no → “No contiene la palabra clave”.


// 💡 Usa:
// if (frase.toLowerCase().includes('jesús')) { ... }


function palabraClave(){

    let palabra = prompt("Ingresa tu palabra");

    if (palabra.toLowerCase().includes('jesús')) { 
        alert("Econtraste mi palabra secreta :O")
    }

    else{
        alert("Tu palabra no incluye mi frase :( ")
    }


}


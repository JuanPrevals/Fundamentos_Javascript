
console.log("Conexion js establecida...")

// Edad
function edadVotar() {
  let edad = parseInt(prompt("Ingrese su Edad: ")); // Input conversion string a número // Condicion if - else if -else
  if (edad >= 18) {
    alert("Su edad " + edad + " está aprobada para votar.");
  }

  else if (edad >= 0 && edad < 18) { //&& compuerta AND
    alert("Su edad " + edad + "no esta aprobada para votar.");
  }

  else {
    alert("Ingrese un valor válido");
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
  }

  else if (numero % 2 === 0) {
    alert("Es par");
  }

  else {
    alert("Es impar");
  }
}


// Temperatura ambiental
function verificarTemperatura() {
  let temp = parseInt(prompt("Ingrese la temperatura actual en °C:"));

  if (isNaN(temp)) {
    alert("Por favor, ingrese una temperatura válida.");
  }

  else if (temp >= 30) {
    alert("Hace calor");
  }

  else if (temp <= 5) {
    alert("Hace frio");
  }

  else {
    alert("Clima agradable");
  }
}



// Comparar Numeros
function compararNumeros() {
  let num1 = parseInt(prompt("Ingrese el primer número:"));
  let num2 = parseInt(prompt("Ingrese el segundo número:"));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese números válidos.");
  }

  else if (num1 > num2) {
    alert("El primer número (" + num1 + ") es mayor que el segundo (" + num2 + ").");
  }

  else if (num2 > num1) {
    alert("El segundo número (" + num2 + ") es mayor que el primero (" + num1 + ").");
  }

  else {
    alert("Ambos números son iguales.");
  }
}


// Evaluar Nota
function evaluarNota() {
  let nota = parseInt(prompt("Ingrese su nota (entre 1 y 7):"));

  if (isNaN(nota)) {
    alert("Por favor, ingrese un número válido.");
  }

  else if (nota < 1 || nota > 7) {
    alert("La nota debe estar entre 1 y 7.");
  }

  else if (nota >= 4) {
    alert("Aprobado");
  }

  else {
    alert("Reprobado");
  }
}


// Admin
function verificarUsuario() {
  let Usuario = "Admin"
  let user = prompt("Ingrese su Usuario: ");

  if (user == Usuario) {
    alert("Bienvenido administrador");
  }

  else {
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

// Precio con descuento


function descuentoProducto(){
  let producto = parseInt(prompt("Ingrese precio"));
  if (producto >= 10000){
    alert("Obtienes un descuento")
  {

  } else if (producto <= 9999){
    
  }
    
}
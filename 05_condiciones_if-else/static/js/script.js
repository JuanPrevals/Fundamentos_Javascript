// Edad
console.log("Conexion js establecida...")

function edadVotar() {
  let edad = parseInt(prompt("Ingrese su Edad: ")); // Input conversion string a número // Condicion if - else if -else
  if (edad >= 18) {
    alert("Su edad " + edad + " está aprobada para votar.");
  } else if (edad >= 0 && edad < 18) { //&& compuerta AND
    alert("Su edad " + edad + "no esta aprobada para votar.");
  } else {
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
  } else if (numero % 2 === 0) {
    alert("Es par");
  } else {
    alert("Es impar");
  }
}
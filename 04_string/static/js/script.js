// Uso de Strings

let nombre = "Juan"; //variable tipo texto

function usarString(){
    let primeraLetra = nombre[0];
    //Asignamos valor a primeraLetra con posicion 0 de nombre
    let ultimaLetra = nombre[nombre.length - 1];
    alert("primera letra es :" + primeraLetra + "\nÚltima letra es:" + ultimaLetra);
    //Mostrar resultado
}
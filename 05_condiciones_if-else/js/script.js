console.log ("Conexion js establecida...")

function edadVotar(){
    let edad=parseInt(prompt("Ingrese su Edad: ")); // Input conversion string a número // Condicion if - else if -else
    if(edad >=18){
    alert("Su edad "+ edad + "aprobada para votar.");
    } else if(edad >=0 && edad < 18) { //&& compuerta AND
      alert("Su edad " + edad + "no esta aprobada para votar.");  
    } else{
      alert("Ingrese un valor válido");  
    }
};
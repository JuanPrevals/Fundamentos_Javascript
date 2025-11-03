console.log("Conexion JS establecida!")



function tablaMultiplicar() {

    let num = parseInt(prompt("Ingrese un número: "))

    let tablas = `Tabla de ${num}`

    for (let i = 1; i <= 10; i++) {
        tablas += `\n ${num} x $[i] = ${num * i}`
    }
    alert(tablas);
}

function numeroPar() {
    let num = parseInt(prompt("Ingresa un número"));
    let resultado = `los numeros pares de ${num} son: `

    for (let i = 1; i <= num; i++)
        if (i % 2 == 0) {
            resultado += `${i}`
        }

    alert(resultado);

}

function contarPar() {
    let word = parseInt(prompt("Dime un numero"));
    let cont = 0
    for (let i = 0; i < word.length; i++) {
        cont++
    }
    alert(`La palabra "${word} tiene ${count} letras`)
}


function calculoFactorial() {
    let numero = parseInt(prompt("Ingrese su número"));
    let factorial = 1;
    let largo = "1";

    for (let i = 2; i <= numero; i++) {
        largo += ` * ${i}`;
        factorial *= i;
    }

    alert(`El factorial de ${numero} es: ${largo} = ${factorial}`);

}


function numerosImpares()s {
    let numero = parseInt(prompt("Ingresar números: "));
    let respuesta = 0;
    let largoImpar = "1"
    for (let i = 2; i <= numero; i++) {
        if (i % 2 != 0) {
            respuesta += i
            largoImpar += ` + ${i}`

        }
    }
    respuesta += 1
    alert(`Las sumas de ${largoImpar} = ${respuesta}`)

}

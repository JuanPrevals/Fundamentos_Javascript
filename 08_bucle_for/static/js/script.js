console.log("Conexion JS establecida!")



function tablaMultiplicar() {

    let num = parseInt(prompt("Ingrese un número: "))

    let tablas = `Tabla de ${num}`

    for (let i = 1; i <= 10; i++) {
        tablas += `\n ${num} x $[i] = ${num * i}`
    }
    alert(tablas);
}

// 🔢 1. Contador de interacciones en una app
console.log("=== Contador de Interacciones ===");
for (let i = 1; i <= 10; i++) {
    console.log("Interacción " + i);
}

console.log("\n");

console.log("=== Simulación de Barra de Carga ===");
for (let porcentaje = 0; porcentaje <= 100; porcentaje += 10) {
    console.log("Cargando... " + porcentaje + "%");
}
console.log("Carga completa.");

console.log("\n");

console.log("=== Descuento Progresivo en Tienda ===");
let descuento = 5;
for (let producto = 1; producto <= 5; producto++) {
    console.log("Producto " + producto + " - Descuento aplicado: " + descuento + "%");
    descuento += 5;
}

console.log("\n");

console.log("=== Cálculo de Puntos en Videojuego ===");
let puntos = 0;
for (let nivel = 1; nivel <= 5; nivel++) {
    puntos += 50;
}
console.log("Puntos acumulados: " + puntos);

console.log("\n");
console.log("=== Contador de Notificaciones ===");
let notificaciones = 5;
while (notificaciones > 0) {
    console.log("Tienes " + notificaciones + " notificaciones nuevas.");
    notificaciones--;
}
console.log("No tienes notificaciones pendientes.");

console.log("\n");

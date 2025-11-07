function pizzaOven(corteza, salsa, quesos, ingredientes) {
  let pizza = {};
  pizza.corteza = corteza;
  pizza.salsa = salsa;
  pizza.quesos = quesos;
  pizza.ingredientes = ingredientes;
  return pizza;
}

let pizzaChicago = pizzaOven(
  "corteza tradicional",
  "salsa tradicional",
  ["mozzarella"],
  ["pepperoni", "salchicha"]
);
console.log("Pizza estilo Chicago:", pizzaChicago);

let pizzaLanzada = pizzaOven(
  "lanzada a mano",
  "salsa marinara",
  ["mozzarella", "feta"],
  ["champiñones", "aceitunas", "cebollas"]
);
console.log("Pizza lanzada a mano:", pizzaLanzada);

let pizzaChef = pizzaOven(
  "corteza delgada y crujiente",
  "salsa de tomate con albahaca",
  ["mozzarella", "parmesano"],
  ["jamón", "piña", "albahaca fresca"]
);
console.log("Pizza del chef:", pizzaChef);

let pizzaEspecial = pizzaOven(
  "corteza rellena de queso",
  "salsa blanca de ajo",
  ["mozzarella", "gorgonzola"],
  ["pollo", "espinacas", "tomates secos"]
);
console.log("Pizza especial de la casa:", pizzaEspecial);

// Soluciones: Ejercicios de Funciones en JavaScript

// 1. Tipos de funciones
console.log("Ejercicio 1: Tipos de funciones");

function multiplicar(a, b) {
  return a * b;
}

const dividir = function(a, b) {
  return a / b;
};

console.log(multiplicar(4, 5)); // Muestra: 20
console.log(dividir(20, 4));    // Muestra: 5

// 2. Métodos
console.log("\nEjercicio 2: Métodos");

const calculadora = {
  sumar: function(a, b) {
    return a + b;
  },
  restar(a, b) {
    return a - b;
  },
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => a / b
};

console.log(calculadora.sumar(5, 3));      // Muestra: 8
console.log(calculadora.restar(10, 4));    // Muestra: 6
console.log(calculadora.multiplicar(3, 3)); // Muestra: 9
console.log(calculadora.dividir(15, 3));    // Muestra: 5

// 3. Parámetros por defecto
console.log("\nEjercicio 3: Parámetros por defecto");

function saludar(nombre, idioma = "es") {
  const saludos = {
    es: "Hola",
    en: "Hello",
    fr: "Bonjour"
  };
  return `${saludos[idioma]}, ${nombre}!`;
}

console.log(saludar("Ana"));        // Muestra: "Hola, Ana!"
console.log(saludar("John", "en")); // Muestra: "Hello, John!"
console.log(saludar("Marie", "fr")); // Muestra: "Bonjour, Marie!"

// 4. Funciones que retornan valores
console.log("\nEjercicio 4: Funciones que retornan valores");

function esPar(numero) {
  return numero % 2 === 0;
}

console.log(esPar(4));  // Muestra: true
console.log(esPar(7));  // Muestra: false

// 5. Arrow functions
console.log("\nEjercicio 5: Arrow functions");

function doble(numero) {
  return numero * 2;
}

const dobleArrow = (numero) => numero * 2;

console.log(dobleArrow(5));  // Muestra: 10
console.log(dobleArrow(3));  // Muestra: 6

// 6. Funciones como argumentos
console.log("\nEjercicio 6: Funciones como argumentos");

function aplicarOperacion(a, b, operacion) {
  return operacion(a, b);
}

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

console.log(aplicarOperacion(5, 3, suma));   // Muestra: 8
console.log(aplicarOperacion(10, 4, resta)); // Muestra: 6

// 7. Cierre (Closure)
console.log("\nEjercicio 7: Cierre (Closure)");

function contador() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const incrementar = contador();
console.log(incrementar()); // Muestra: 1
console.log(incrementar()); // Muestra: 2
console.log(incrementar()); // Muestra: 3


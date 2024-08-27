// Ejercicios: Funciones en JavaScript

// 1. Tipos de funciones
console.log("Ejercicio 1: Tipos de funciones");
// Crea una función declarativa llamada `multiplicar` que tome dos números como parámetros y devuelva su producto.
// Luego, crea una función de expresión llamada `dividir` que tome dos números como parámetros y devuelva el resultado de su división.

function multiplicar(n1, n2) {
  return n1 * n2;
}

let dividir = function (n1, n2) {
  return n1 / n2;
};

console.log(multiplicar(4, 5)); // Debería mostrar: 20
console.log(dividir(20, 4)); // Debería mostrar: 5

// 2. Métodos
console.log("\nEjercicio 2: Métodos");
// Crea un objeto llamado `calculadora` con métodos para sumar, restar, multiplicar y dividir.
// Luego usa estos métodos para realizar algunas operaciones.

const calculadora = {
  sumar(n1, n2) {
    return n1 + n2;
  },
  restar(n1, n2) {
    return n1 - n2;
  },
  multiplicar(n1, n2) {
    return n1 * n2;
  },
  dividir(n1, n2) {
    return n1 / n2;
  },
};

console.log(calculadora.sumar(5, 3)); // Debería mostrar: 8
console.log(calculadora.restar(10, 4)); // Debería mostrar: 6
console.log(calculadora.multiplicar(3, 3)); // Debería mostrar: 9
console.log(calculadora.dividir(15, 3)); // Debería mostrar: 5

// 3. Parámetros por defecto
console.log("\nEjercicio 3: Parámetros por defecto");
// Crea una función llamada `saludar` que tome un nombre como parámetro y un idioma (con valor por defecto "es" para español).
// La función debe saludar en el idioma especificado.

function saludar(nombre, idioma = "es") {
  let idiomas = {
    es: "Hola",
    fr: "Bonjour",
    en: "Hello",
  };

  return `${idiomas[idioma]} ${nombre} (${idioma})`;
}

console.log(saludar("Ana")); // Debería mostrar: "Hola, Ana!"
console.log(saludar("John", "en")); // Debería mostrar: "Hello, John!"
console.log(saludar("Marie", "fr")); // Debería mostrar: "Bonjour, Marie!"

// 4. Funciones que retornan valores
console.log("\nEjercicio 4: Funciones que retornan valores");
// Crea una función llamada `esPar` que tome un número como parámetro y retorne `true` si es par o `false` si es impar.

let esPar = function (num) {
  return num % 2 == 0;
};

console.log(esPar(4)); // Debería mostrar: true
console.log(esPar(7)); // Debería mostrar: false

// 5. Arrow functions
console.log("\nEjercicio 5: Arrow functions");
// Convierte la siguiente función tradicional en una arrow function:

function doble(numero) {
  return numero * 2;
}

let dobleArrow = (n1) => n1 * 2;

console.log(dobleArrow(5)); // Debería mostrar: 10
console.log(dobleArrow(3)); // Debería mostrar: 6

// 6. Funciones como argumentos
console.log("\nEjercicio 6: Funciones como argumentos");
// Crea una función llamada `aplicarOperacion` que tome dos números y una función como parámetros,
// y devuelva el resultado de aplicar la función a los dos números.

function aplicarOperacion(n1, n2, myFunction) {
  return myFunction(n1, n2);
}

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

let aplicarOperacion2 = (n1, n2, myFunction) => myFunction(n1, n2);
let suma2 = (n1, n2) => n1 + n2;
let resta2 = (n1, n2) => n1 - n2;

console.log(aplicarOperacion(5, 3, suma)); // Debería mostrar: 8
console.log(aplicarOperacion(10, 4, resta)); // Debería mostrar: 6
console.log(aplicarOperacion2(5, 4, suma2)); // Debería mostrar: 9
console.log(aplicarOperacion2(10, 5, resta2)); // Debería mostrar: 5

// 7. Cierre (Closure)
console.log("\nEjercicio 7: Cierre (Closure)");
// Crea una función llamada `contador` que retorne otra función.
// La función retornada debe incrementar un contador cada vez que es llamada y devolver el valor actual del contador.

function contador() {
  let cont = 0;

  return function incrementar() {
    cont++;
    return cont;
  };
}

const incrementar = contador();
console.log(incrementar()); // Debería mostrar: 1
console.log(incrementar()); // Debería mostrar: 2
console.log(incrementar()); // Debería mostrar: 3

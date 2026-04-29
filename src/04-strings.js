// Strings en JS
const nombre = "JavaScript";
const version = "ES6";

const mensaje = "Estoy aprendiendo " + nombre + " en la versión " + version;
console.log(mensaje);

// Ejemplo de Template Literals
// Esto me permite insertar variables dentro del string

const mensjae_template = `Este es un mensje de Template literals desde ${nombre} en la version ${version}`;
console.log(mensjae_template);

// Ejemplo de expresiones dentro de las template literals
const precio = 100;
const cantidad = 3;
const total = `Total: ${precio * cantidad}`;
console.log(total);

// Métodos principales para los strings

// función para contar los caracteres de un texto con js
let texto1 = "Este texto tiene 30 caracteres";

function contarCaracteres(texto) {
  return texto.length;
}

console.log(contarCaracteres(texto1));

// contar los caracteres de forma sencilla
const texto2 = "Hola Mundo JS";

console.log(texto2.length);

// Slice
const texto3 = "Este es un texto más largo para pruebas del método slice";
console.log("Este es el texto a trabajar: " + texto3);
console.log("Estos son los caracteres del 0 al 10: " + texto3.slice(0, 10));
console.log("Ahora iniciamos desde la posicion 12: " + texto3.slice(12));
console.log("Por último, los últimos 7 caracteres: " + texto3.slice(-7));

// substring

const texto4 = "Substring NO trabaja con posiciones negativas";
const caracterInicial = 0;
const caracterFinal = 8;

console.log(texto4.substring(0, 5));

// funcion de sustring

function contarConSubstring(texto, nInicio, nFin) {
  return texto.substring(nInicio, nFin);
}

console.log(contarConSubstring(texto4, caracterInicial, caracterFinal));

// metodo split para separar las lineas

const texto5 =
  "Parte uno del texto largo. Parte dos del texto largo. Parte tres del texto largo";

const lineas = texto5.split(".");

console.log(lineas);
console.log(lineas.length);

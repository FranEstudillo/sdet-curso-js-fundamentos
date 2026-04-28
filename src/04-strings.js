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

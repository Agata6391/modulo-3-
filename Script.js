// como crear un regex
const regex1=new RegExp('Patron'); //usando un construtor regExp


//Las expresiones regulares pueden contener caracteres normales, como letras y números, que coincidirán exactamente con ellos mismos en el texto de búsqueda. Pero lo que realmente hace que las expresiones regulares sean poderosas son los metacaracteres y los cuantificadores.

// Algunos de los metacaracteres más comunes en JavaScript son:

// .: coincide con cualquier carácter excepto una nueva línea.
// ^: coincide con el inicio de una cadena.
// $: coincide con el final de una cadena.
// \: se utiliza para escapar caracteres especiales.
// []: se utiliza para definir un conjunto de caracteres que se buscarán.
// |: se utiliza para la alternancia, lo que significa "o".
// Además de los metacaracteres, los cuantificadores también son importantes. Estos le permiten especificar cuántas veces debe aparecer un patrón para que haya una coincidencia. Algunos cuantificadores comunes son:

// *: coincide con cero o más veces.
// +: coincide con una o más veces.
// ?: coincide con cero o una vez.
// {n}: coincide exactamente con n veces.

// const regex2= /patron/;
const regex2 = /\d{4}-\d{4}$/;
const texto = "el numero del profesor es 6338-4464";
console.log(regex2.test(texto));
const regex3 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validarCorreo(correo){
return regex3.test(correo);
}
const correoValido = 'fernando@fernando.com';
const correoInvalido = 'fernando-nosirve@fernando';
console.log(validarCorreo(correoValido));
console.log(validarCorreo(correoInvalido));

const regex4 = /^(?:[1-9]{1,3}\.){3}[0-9]{1,3}$/;
const regex5 = /^(25[1-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
function validarIP(ip){
    return regex5.test(ip)
};
const ipValid= '255.255.127.0';
const ipInvalid ='256.255.0.1';
console.log(validarIP(ipValid));
console.log (validarIP(ipInvalid));


const textoweb = 'Vista nuestra pagina web https://www.fernando.com/ y descrubre el emocionate mundo de la programacion';
const urlregex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._]{1,255}\.[a-zA-Z0-9()]{1,6}\b(\/[-a-zA-Z0-9@:%._+~#=]*)?/;
const matches = textoweb.match(urlregex);

if (matches && matches.length > 0) {
    console.log('La URL es:', matches[0]);
} else {
    console.log('No se encontró URL.');
}

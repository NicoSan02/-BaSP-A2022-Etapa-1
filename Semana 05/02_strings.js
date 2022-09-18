// Strings

// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
// (utilizar toUpperCase).

var myString = "string de caracteres";
var upper = myString.toUpperCase();
console.log(upper);

// b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
// con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var myString2 = "al menos 10 caracteres"
var newString1 = myString2.substring(0,5);
console.log(newString1);

// c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
// con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

var myString3 = "cadena de strings"
var newString2 = myString3.substring(14,17);
console.log(newString2);

// d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
// con la primera letra en mayúscula y las demás en minúscula. 
// Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

// var myString4 = "variable de tipo string"
// var newString3 = myString4.substring(0) + myString4;

// e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var myString5 = "otra cadena de strings";
var firstSpace = myString5.indexOf(" ");
console.log(firstSpace);

// f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
//palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

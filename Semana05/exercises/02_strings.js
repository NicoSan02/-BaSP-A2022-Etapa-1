console.log('--EXERCISE 2: STRINGS')

// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a');
var myString = 'string of characters';
var upperString = myString.toUpperCase();
console.log(upperString);

// b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 
//5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b');
var myString2 = 'new string of characters'
var firstFive = myString2.substring(0,5);
console.log(firstFive);

// c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
//los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c');
var myString3 = 'another string of characters'
var lastThree = myString3.substring(25);
console.log(lastThree);

// d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
// Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d');
var myString4 = 'a string variable'
var stringUpper = myString4.substring(0,1).toUpperCase() + myString4.substring(1).toLowerCase();
console.log(stringUpper);


// e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e');
var myString5 = 'a new string of characters';
var firstSpace = myString5.indexOf(' ');
console.log(firstSpace);

// f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
//palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.f');
var twoWords = 'various characters'
var space = twoWords.indexOf(' ')
var twoWordsMod = (twoWords.substring(0,1).toUpperCase() + twoWords.substring(1, space).toLowerCase()) + 
(twoWords.substring(space, 8) + twoWords.substring(8,9).toUpperCase() + twoWords.substring(9).toLowerCase());
console.log(twoWordsMod);
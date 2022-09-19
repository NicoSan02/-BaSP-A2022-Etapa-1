console.log('--EXERCISE 3: ARRAYS')

// a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
//"Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('-Exercise 3.a');
var monthsArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 
'Diciembre'];
console.log(monthsArray[4], monthsArray[10]);

// b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('-Exercise 3.b');
var monthsArray2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 
'Diciembre'];
monthsArray2.sort();
console.log(monthsArray2);

// c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('-Exercise 3.c');
var monthsArray3 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 
'Diciembre'];
monthsArray3.push('Moto');
monthsArray3.unshift('Auto');
console.log(monthsArray3);

// d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('-Exercise 3.d');
var monthsArray4 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 
'Diciembre'];
monthsArray4.shift();
monthsArray4.pop();
console.log(monthsArray4);

// e) Invertir el orden del array (utilizar reverse).

console.log('-Exercise 3.e');
var monthsArray5 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 
'Diciembre'];
monthsArray5.reverse();
console.log(monthsArray5);

// f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('-Exercise 3.f');
var monthsArray6 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 
'Diciembre'];
var stringMonths = monthsArray6.join('-');
console.log(stringMonths);

// g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('-Exercise 3.g');
var monthsArray7 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 
'Diciembre'];
var slicedArray = monthsArray7.slice(4, 11);
console.log(slicedArray);
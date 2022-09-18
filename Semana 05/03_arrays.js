// Arrays
// a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
//mostrar por consola los meses 5 y 11 (utilizar console.log).

var monthsArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(monthsArray[4]);
console.log(monthsArray[10]);

// b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var monthsArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(monthsArray.sort());

// c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

var monthsArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
monthsArray.push('Moto');
monthsArray.unshift('Auto');
console.log(monthsArray);

// d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

var monthsArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
monthsArray.shift();
monthsArray.pop();
console.log(monthsArray);

// e) Invertir el orden del array (utilizar reverse).

var monthsArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
monthsArray.reverse();
console.log(monthsArray);

// f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

var monthsArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var stringMonths = monthsArray.join("-");
console.log(stringMonths);

// g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var monthsArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
monthsArray.splice(0, 4);
monthsArray.splice(7, 1);
console.log(monthsArray);
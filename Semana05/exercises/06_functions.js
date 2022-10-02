console.log('--EXERCISE 6: FUNCTIONS')

// a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable 
// en la consola del navegador.

console.log('-Exercise 6.a');
function sumFunction(num1, num2) {
    return num1 + num2;
}
var sumReturn = sumFunction(4, 6);
console.log(sumReturn);

// b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; 
// de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error 
// y retornar el valor NaN como resultado.

console.log('-Exercise 6.b');

function sumValidation(num1, num2){
    if((typeof num1 || typeof num2) != 'number'){
        alert('Error in one or more parameters');
        return NaN
    } else {
        return num1 + num2;
    }
}
console.log(sumValidation('2', 2));

// c) Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero 
// si es un número entero.

console.log('-Exercise 6.c');
function validateInteger(number){
    return Number.isInteger(number)
}
console.log(validateInteger(2.2));

// d) A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. 
// y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error 
// y retornar el número convertido a entero (redondeado).

console.log('-Exercise 6.d');
function sumValidationInteger (num1, num2){
    if((typeof num1 || typeof num2) != 'number'){
    alert('Error in one or more parameters');
    } else if(!validateInteger(num1)||!validateInteger(num2)){
        alert('Error: number needs to be integer');
        return Math.round(num1 + num2);
    } else {
        return (num1 + num2);
    }
}
console.log(sumValidationInteger(2, 4.5))

// e) Convertir la validación del ejercicio 6d) en una función separada y llamarla 
// dentro de la función suma probando que todo siga funcionando igual.

console.log('-Exercise 6.e');
function intValidationFunction (num1, num2) {
    if(!validateInteger(num1)||!validateInteger(num2)){
        alert('Error: number needs to be integer');
        return false;
    }
}
function sumFunction(num1, num2) {
    if(intValidationFunction(num1, num2)){
        return num1 + num2;
    } else {
        return Math.round(num1 + num2);
    }
}
console.log(sumFunction(2.5, 2));
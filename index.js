// console.log('Hi');
// Tipos de datos en JS
    // String: Cadena de caracteres. 'a' "a"
    // Boolean: true o false.
    // Null: nulo. se encuentra vacia
    // Number: 132315
    // Undefined: no fue definida
    // Object: objeto, estructuras para agruptar varios datos.

// Variables
    // var: 
    // let
    // const

// let miPrimeravariable = 'Mi primera variable'
// console.log(miPrimeravariable);
    // mutabilidad
// miPrimeravariable = 'Cambiado'
// console.log(miPrimeravariable);

// Boolean
// let miBoolean = true
// let miOtroBool = false

// let miNumero= 0
// let miNumero2=12
// let miNumero3=-24

// console.log(miNumero, miNumero2, miNumero3, miBoolean, miPrimeravariable)

// let undef
// console.log(undef)

// let nulo= null
// console.log('nulo',nulo)

// Objeto : agrupación de datos
// const miPrimerObjeto = {
//     unNumero: 12,
//     unString: 'xDDDD',
//     unaCondicion: true
// }
// console.log(miPrimerObjeto.unString)

// ARREGLO
// const arr = [1,2,'Hola', 'Mundo', miPrimerObjeto]
// console.log(arr)
// arr.push(5)
// console.log(arr)

// CONTROL DE FLUJO
// IF
// const edad =10
// if (edad > 5 && edad <18) {
//     console.log('El niño puede jugar')
// }else{
//     console.log('No puede jugar :C')

// }


// const numeros = [1,2,3,4,5,6,7,8];
// console.log(numeros[0])
// for (let i = 0; i < numeros.length; i++) {
    
    
// }


// Funciones
// function Suma(a,b){
//     console.log(a+b)
// }

// const reslutadoSUma1 = Suma(1,2)
// console.log("resultado", reslutadoSUma1)

// Callback: función que se ejecuta al final de una función

// function sumar(a,b,cb){
//     const r = a+ b;
//     cb(r)
// }
// function callback(result){
//     console.log('resultado', result)
// }
// sumar(2,3,callback)

// fat arrow function
// const miFatArrowFunction = (a,b) => a + b;
// const otraArrow = (a,b) => {
//     return a + b
// }
// const r = otraArrow(1,2)
// console.log(r)

// funciones anonima
// sumar


// function calcularDatos(valores,minimo,maximo){
//     let media, suma = 0, totalValidos = 0; 
//     let totalEntradas = 0; 
//     let i = 0;
//     let longitud = valores.length; 
//     while(valores[i] > 0 && i < longitud){
//         i++;
//             if(valores[i] >= minimo && valores[i] <= maximo){ 
//                 totalValidos ++;
//                 suma = suma + valores[i]
//                 }  
//             }
//         totalEntradas = i; 
//             if(totalValidos > 0)
//             media = suma / totalValidos; 
//             else
//             media = 0;
//         console.log("Media = " + media); 
//         console.log("Validos = " + totalValidos);
//         console.log("Entradas = " + totalEntradas);
// }
// calcularDatos([1,2,3,4,5,67,87],0,100);

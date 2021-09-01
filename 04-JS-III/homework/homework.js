// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  ultimoElemento = array[array.length -1];
  return ultimoElemento;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
 var nueva = [];
 for(var i=0;i<array.length;i++){
    nueva.push(array[i]+1);
  }
  return nueva;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.reduce(myFunc);

function myFunc(total, num) {
  return total + " " + num;
}
   
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var comprobacion = [];
  for(var i=0;i<array.length;i++){
    if(array[i]===elemento){
      comprobacion.push(true);
    }
  }
  if(comprobacion.length>0){
    return true;
  }else{
    return false;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  return numeros.reduce(myFunc);

function myFunc(total, num) {
  return total + num;
}
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for(i=0;i<resultadosTest.length;i++){
    suma += resultadosTest[i];
  }
  return suma/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  numeros.sort(function(a, b){return a - b});
  return numeros[numeros.length -1]

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  var argumentos = [];
if(arguments.length === 0){
return 0;
}else if(arguments.length === 1){
return arguments[0];
}else{
var numeros = [];  
for(var i=0;i<arguments.length;i++){
numeros.push(arguments[i]);
}
return numeros.reduce(myFunc);

function myFunc(total, num) {
  return total * num;
}
}
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var comprobacion = [];
  for(var i=0;i<arreglo.length;i++){
    if(arreglo[i]>18){
      comprobacion.push(true);
    }
  }
  
  return comprobacion.length;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch(numeroDeDia){
    case 2: case 3: case 4: case 5: case 6:
    return "Es dia Laboral";
    break;
    default:
    return "Es fin de semana";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numeroInicial = n.toString()[0];

  if(numeroInicial === '9'){
    return true;
  }else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var comprobacion = [];
  for(var i=1;i<arreglo.length;i++){
    if(arreglo[0]===arreglo[i]){
      comprobacion.push(true);
    }
  }
  if(arreglo.length -1 === comprobacion.length){
    return true;
  }else{
    return false;
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mesesBuscados = [];
  for(var i=0;i<array.length;i++){
    if(array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre"){
      mesesBuscados.push(array[i]);
    }
  }
  if(mesesBuscados.length === 3){
    return mesesBuscados;
  }else{
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var comprobacion = [];
  for(var i=0;i<array.length;i++){
    if(array[i]>100){
      comprobacion.push(array[i]);
    }
  }  
  return comprobacion;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoArreglo = [numero];
  for(var i=0;i<10;i++){
    var suma = numero += 2;
    var interaciones = i;
    if((nuevoArreglo[i] === (interaciones+1))){
      return "Se interrumpió la ejecución";
      break;
    }  
nuevoArreglo.push(suma);

}

if(nuevoArreglo.length === 11){
  nuevoArreglo.shift();
  return nuevoArreglo;
}

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArreglo = [];
for(var i=0;i<9;i++){
var suma = numero += 2;  
var interaciones = i;

if((interaciones)===5){
  nuevoArreglo.push(suma);
  continue;
}  
nuevoArreglo.push(suma);

}

return nuevoArreglo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

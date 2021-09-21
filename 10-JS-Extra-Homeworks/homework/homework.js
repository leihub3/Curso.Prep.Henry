// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arrayContenedor = [];
  for (let clave in objeto){
    var nuevoArray = [];
    nuevoArray.push(clave);
    nuevoArray.push(objeto[clave]);
    arrayContenedor.push(nuevoArray);
  }
  return arrayContenedor;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí  
  var cadenaArray = string.split("");
  var obj = {};
  for (var key of cadenaArray) {
        obj[key] = cuantasVeces(cadenaArray,key);
   }
   return obj;

   function cuantasVeces(cadena,letra){
    var indice = [];
    
    for(var i=0; i<cadena.length;i++){
      if(cadena[i] === letra){
        indice.push(letra);
      }    
    }
      return indice.length; 
  }

}




function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var cadenaToArray = s.split("");

  var minusculas = [];
  var mayusculas = [];
  var letra = "";
  cadenaToArray.forEach(function(e){
    letra = e;
    if(e === letra.toUpperCase()){
      mayusculas.push(e);
    }else{
      minusculas.push(e);
    }    
  });
  return (mayusculas.join("") + minusculas.join(""));
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var cadenaToArray = str.split(" ");
  var fraseAlReves = "";

  cadenaToArray.forEach(function(e){
    var palabraArrayToString = e;
    var palabraAlReves = palabraArrayToString.split("").reverse().join("");
    fraseAlReves += palabraAlReves + " ";
  });

return fraseAlReves.slice(0,-1);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numberToString= numero.toString();

  var primeraParte = "";
  var segundaParte = "";
  
  if((numberToString.length)%2 === 0){
    //si la contidad de caracteres es par
    primeraParte = numberToString.slice(0,(numberToString.length)/2);
    segundaParte = numberToString.slice((numberToString.length)/2);
  }else{
    //si la contidad de caracteres es IMPAR
    primeraParte = numberToString.slice(0,(numberToString.length)/2);
    segundaParte = numberToString.slice(((numberToString.length)/2)+1);
  }
  if(primeraParte === segundaParte.split("").reverse().join("")){
    return "Es capicua";
  }else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenaToArray = cadena.split("");

  var nuevaCadenaArray = [];

  for(var i=0; i<cadenaToArray.length;i++){
    if(cadenaToArray[i] === "a" || cadenaToArray[i] === "b" || cadenaToArray[i] === "c"){
      cadenaToArray[i] = "";
    }
  }

  if(cadenaToArray.join("") === cadena){
    return cadena;
  }else{
    return cadenaToArray.join("");
  }
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var asc = arr.sort(function (a,b){
    return  a.length - b.length; 
    });
 
  return asc;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var interseccion = [];
  arreglo1.forEach(function(e){
    for(var i=0;i<arreglo2.length;i++){
      if(e === arreglo2[i]){
        interseccion.push(e);
      }
    }
  });
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


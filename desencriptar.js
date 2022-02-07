/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var inputMensajeEncriptado = document.querySelector("#msg");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var inputFrase = document.querySelector("#input-texto");

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();

    var fraseUsuario = inputFrase.value;
    
// validador de mayuzculas de la letra A a la Z
// validador de vocales con puntuacion 
   var mayusculas = fraseUsuario;
   var acentos = fraseUsuario;
   var error1 = [];
   var error2 = [];

   if(mayusculas.toString().match(/[A-Z]/g)){
   error1 = mayusculas.toString().match(/[A-Z]/g);//letras mayusculas de la a la z global, recorre todo el grupo
   alert("tiene letra mayuscula => "+ error1 + " <= vuelve a ingresar el codigo"); 
   return;//si cumple la condicion no continua con la encriptacion hasta que cambie la letra
   }if(acentos.toString().match(/[áéíóú]/g)){// vocales á,é,í,ó,ú, recorre todo el grupo
   error2 = acentos.toString().match(/[áéíóú]/g);
   alert("tiene vocales con acento => "+ error2 +" <= vuelve a ingresar el codigo ");
   return;//si cumple la condicion no continua con la encriptacion hasta que cambie la letra
   }

//Desencriptador de texto

var buscare1 = /(enter)/gi;
var buscare2 = /(imes)/gi;
var buscare3 = /(ai)/gi;
var buscare4 = /(ober)/gi;
var buscare5 = /(ufat)/gi;
var reemplazoe1 = "e";
var reemplazoe2 = "i";
var reemplazoe3 = "a";
var reemplazoe4 = "o";
var reemplazoe5 = "u";

var textoIngresado = fraseUsuario;
var textoDesencriptado = [];

textoDesencriptado = textoIngresado.replace(buscare1,reemplazoe1).replace(buscare2,reemplazoe2).replace(buscare3,reemplazoe3).replace(buscare4,reemplazoe4).replace(buscare5,reemplazoe5);
console.log(textoDesencriptado);
inputMensajeEncriptado.value = textoDesencriptado;
inputFrase.value=" ";
  
});
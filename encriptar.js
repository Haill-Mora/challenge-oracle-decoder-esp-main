/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

var inputMensajeEncriptado = document.querySelector("#msg");
var botonCopiarMensajeEncriptado = document.querySelector("#btn-copy");

var botonEncriptar = document.querySelector("#btn-encriptar"); 
var inputFrase = document.querySelector("#input-texto");

botonEncriptar.addEventListener("click",function(event){
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
   return; //si cumple la condicion no continua con la encriptacion hasta que cambie la letra 
   }if(acentos.toString().match(/[áéíóú]/g)){// vocales á,é,í,ó,ú, recorre todo el grupo
   error2 = acentos.toString().match(/[áéíóú]/g);
   alert("tiene vocales con acento => "+ error2 +" <= vuelve a ingresar el codigo ");
   return;//si cumple la condicion no continua con la encriptacion hasta que cambie la letra
   }

  // encriptador de texto 
   var buscar1 = /(e)/gi;
   var buscar2 = /(i)/gi;
   var buscar3 = /(a)/gi;
   var buscar4 = /(o)/gi;
   var buscar5 = /(u)/gi;
   var reemplazo1 = "enter";
   var reemplazo2 = "imes";
   var reemplazo3 = "ai";
   var reemplazo4 = "ober";
   var reemplazo5 = "ufat";

   var textoIngresado = fraseUsuario;
   var textoEncriptado = [];
   
textoEncriptado = textoIngresado.replace(buscar1,reemplazo1).replace(buscar2,reemplazo2).replace(buscar3,reemplazo3).replace(buscar4,reemplazo4).replace(buscar5,reemplazo5);
console.log(textoEncriptado);
inputMensajeEncriptado.value = textoEncriptado;
inputFrase.value=" ";

});





  
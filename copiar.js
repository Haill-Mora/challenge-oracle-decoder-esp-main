var botonCopiar = document.querySelector("#btn-copy");
var inputMensajeEncriptado = document.querySelector("#msg");

botonCopiar.addEventListener("click",function(){
    
    
    
    inputMensajeEncriptado.select();
    document.execCommand("copy");
    alert("Elemento Copiado");
    
    
});
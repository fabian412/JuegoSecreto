let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("numeroUsuario").value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? "vez" : "veces" }`);
        document.getElementById("reiniciar").removeAttribute("disabled"); 
    } else {
        if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento("p","El numero secreto es menor"); 
        } else {
        asignarTextoElemento("p","El numero secreto es mayor");
        }
        numeroIntentos++;
        limpiar();
    }

    return;

}
function limpiar(){
    let valorCaja = document.querySelector("#numeroUsuario").value = "";
}
function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
//si ya sorteamos todos los numeros.
if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");

}else{    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto  = generarNumeroSecreto();
    numeroIntentos = 1;
}
function reiniciarJuego(){
 //limpiar La caja
 limpiar();
 //Indicar mensaje de intervalos de numeros
 //Generar nuevo numero aleatorio
 //Inicializar el numero de intentos  
 condicionesIniciales();
 //Deshabilitar el boton de nuevo juego
 document.querySelector("#reiniciar").setAttribute("disabled","true");
  
}
condicionesIniciales();

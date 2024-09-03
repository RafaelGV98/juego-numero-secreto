let numerosecreto;
let intentos ;
let listanumerossorteado = [];
let numeromaximo = 10;

function asigacioElementos(elemento, texto){
    let ElementoHTML= document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;

}

function generarnumerosecreto() {
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+ 1;

    console.log(numerogenerado);
    console.log(listanumerossorteado);

    if(listanumerossorteado.length == numeromaximo){
        asigacioElementos("p","ya se sorteropn todos los numeros posibles");

    } else {


    if (listanumerossorteado.includes(numerogenerado)){
        return generarnumerosecreto();


    } else {
        listanumerossorteado.push(numerogenerado);
        return numerogenerado;
    }
}

}
    

function verificarintento() {
    let numerodeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numerodeUsuario === numerosecreto){
        asigacioElementos("p",`CORRECTO, el numero secreto es: ${numerosecreto}, lo hiciste en: ${intentos} ${(intentos == 1)? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }

    else {
        if(numerodeUsuario > numerosecreto){
            asigacioElementos("p","el numero secreto es menor");
        }
        else{
            asigacioElementos("p","el numero secreto es mayor");

        }

            

        intentos++;
        limpiarcaja();
    }
    
    return;

}

function condicionesinciales(){
    asigacioElementos("h1", "Juego del número secreto");
    asigacioElementos("p",`ingresa un número del 1 al ${numeromaximo}`);
    numerosecreto = generarnumerosecreto();
    intentos = 1;
    document.querySelector("#reiniciar").setAttribute("disabled","true");


}


function limpiarcaja(){
    document.getElementById("valorUsuario").value = "";


}

function reiniciarjuego(){
    limpiarcaja();
    condicionesinciales();


   
}

  
condicionesinciales();


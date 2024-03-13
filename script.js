const valorPrimario = document.getElementById('input1').value;
const valorSecundario = document.getElementById('input2').value;

function cambio (){
    let input = document.getElementById('input1');
    let parrafo = document.getElementById('parrafoAlerta');
    
    if (input.value!= 'string'){
        parrafo.style.fontSize ='12px';
    }  
     else {
        parrafo.style.fontSize = '20px';
    }
}



function encriptar(){
    let frase = document.getElementById("input1").value;
    let abecedario = 'abcdefghijklmnopqrstuvwxyz';
    let fraseEncriptada = '';
    let imagenUno = document.getElementById('img1');
    let fraseAlerta = document.getElementById('parrafoAlerta').value;

    

    if (document.getElementById('input1').value === '') {
        let elementoP = document.getElementById('mensajeFinal');
        elementoP.innerHTML = 'no se encuentran textos para encriptar';
        imagenUno.src = 'img/Muñeco.png';
      };
    
        for( let i = 0; i < frase.length; i++){
            let letra = frase[i];
            let indice = abecedario.indexOf(letra);
            


            if (indice !== -1) {
                let fraseInf = document.getElementById('mensajeFinal');
                let letraEncriptada = abecedario [(indice + 4) % abecedario.length];
                fraseEncriptada += letraEncriptada;
                document.getElementById('input1').value =''; 
                fraseInf.innerHTML = "Tu mensaje fue encriptado con éxito.";
                imagenUno.src= 'img/imagenfinal.png'                          

                 } else {
                fraseEncriptada += letra;
                document.getElementById('input1').value ='';
                
                }
               
               
        }  
            
    document.getElementById("input2" ).value = fraseEncriptada;
    
    
} 


    

function desencriptar() {
  let abc = 'abcdefghijklmnopqrstuvwxyz';
  let frase2 = document.getElementById('input2').value;
  let fraseEncriptada2 = '';

    for ( i= 0; i < frase2.length; i++){
        let letra2 = frase2 [i];
        let indice = abc.indexOf(letra2);


    if ( indice !== -1) {
        let letraEncriptada2 = abc [( indice -4) % abc.length];
        fraseEncriptada2 += letraEncriptada2;
        document.getElementById('input2').value = '';

    }  else {
        fraseEncriptada2 += letra2;
        document.getElementById('input2').value = '';
    }  
    
}   
document.getElementById( 'input1').value = fraseEncriptada2;
};


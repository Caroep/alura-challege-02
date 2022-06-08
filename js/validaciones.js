var abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function validacionLetraIngresada(letra){
    var letraCorrecta = false;
    var letraRepetida = false
    letraCorrecta = abecedario.includes(letra);
    letraRepetida = letrasEncontradas.includes(letra);
    if(letraCorrecta && !letraRepetida){
        return true;
    }else{
        return false
    }
}

function validacionLetraError(letraError){
    var error = false;
    error = letrasErradas.includes(letraError)
    return error;
}

function validarPalabraNueva(palabra){

    for(i=0;i<palabra.length;i++){
        if (!letraAbecedario(palabra[i])){
            return false;
        }
    }
    return true;
}

function letraAbecedario(letra){
    return abecedario.includes(letra);
}

function validarPalabraRepetida(palabra){
    return listaPalabras.includes(palabra);
}
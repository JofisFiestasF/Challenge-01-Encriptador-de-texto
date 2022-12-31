function removerCaracteresNoAlfabeticos(texto) {
    if (texto.constructor != String) {
        return null
    }

    var patron = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;
    return texto.replace(patron, '');
}

function encriptar() {
    //Pasa el contenido del input a minusculas
    var texto = document.getElementById("text-input").value.toLowerCase();
    var txtCifrado = removerCaracteresNoAlfabeticos(texto);
    //i (/letra/i,"palabra o letra para el reemplazo") modifica tanto si la letra esta en minusculas y mayusculas, g  Para toda la linea u oracion ,m Para que afecte a multiples lineas o parrafos
    var txtCifrado = txtCifrado.replace(/[àáâãäåæ]/igm,"a");
    var txtCifrado = txtCifrado.replace(/[èéêë]/igm,"e");
    var txtCifrado = txtCifrado.replace(/[ìíîï]/igm,"i");
    var txtCifrado = txtCifrado.replace(/[òóôõöœø]/igm,"o");
    var txtCifrado = txtCifrado.replace(/[ùúûü]/igm,"u");

    var txtCifrado = txtCifrado.replace(/[ýÿ]/igm,"y");
    var txtCifrado = txtCifrado.replace(/[ç]/igm,"c");
    var txtCifrado = txtCifrado.replace(/[ð]/igm,"d");
    
    var txtCifrado = txtCifrado.replace(/-/igm,"");

    var txtCifrado = txtCifrado.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");
    
    //Desaparecer la imagen y el texto
    document.getElementById("img-contenedor").style.display = "none";
    document.getElementById("texto-contenedor").style.display = "none";
    document.getElementById("txt-area").style.height = "400px";
    document.getElementById("txt-area").disabled=false;
    //
    document.getElementById("txt-area").innerHTML = txtCifrado;

    document.getElementById("text-input").value = '';
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function desencriptar() {
    var texto = document.getElementById("text-input").value.toLowerCase();
    var txtCifrado = removerCaracteresNoAlfabeticos(texto);

    var txtCifrado = txtCifrado.replace(/[àáâãäåæ]/igm,"a");
    var txtCifrado = txtCifrado.replace(/[èéêë]/igm,"e");
    var txtCifrado = txtCifrado.replace(/[ìíîï]/igm,"i");
    var txtCifrado = txtCifrado.replace(/[òóôõöœø]/igm,"o");
    var txtCifrado = txtCifrado.replace(/[ùúûü]/igm,"u");

    var txtCifrado = txtCifrado.replace(/[ýÿ]/igm,"y");
    var txtCifrado = txtCifrado.replace(/[ç]/igm,"c");
    var txtCifrado = txtCifrado.replace(/[ð]/igm,"d");

    var txtCifrado = txtCifrado.replace(/-/igm,"");

    var txtCifrado = txtCifrado.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
    
    //Desaparecer la imagen y el texto
    document.getElementById("img-contenedor").style.display = "none";
    document.getElementById("texto-contenedor").style.display = "none";
    document.getElementById("txt-area").style.height = "400px";

    document.getElementById("txt-area").disabled=false;
    //
    document.getElementById("text-input").value = '';
    document.getElementById("txt-area").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}
function copiar() {
    var contenido = document.getElementById("txt-area");
    document.getElementById("mensaje-copiar").style.display = "flex";

    contenido.select();
    document.execCommand("copy");
    // alert("Se copio")
    setTimeout(() => {
        document.getElementById("mensaje-copiar").style.display = "none";
    }, 1000);
}
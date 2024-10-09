

// Función para interceptar, colorear y enviar mensajes
function interceptarYEnviar(origenInput, destinoMensaje, origenMensaje) {
    const mensaje = document.getElementById(origenInput).value;
    if (mensaje) {
        const destino = document.getElementById(destinoMensaje);
        const origen = document.getElementById(origenMensaje);
        // Mostrar en la pantalla del emisor
        origen.value += " Enviado: " + mensaje + "\n";
        origen.classList.add('sent');
        // Encriptar el mensaje
        var mensajeRipeado = rip(mensaje);
        // Mostrar en el interceptador
        document.getElementById("interceptador").value += "Interceptado: " + mensajeRipeado + "\n";
        // Enviar al receptor
        //if(mensajeRipeado.includes("cf3rip")){
            destino.value += " Recibido: " + drip(mensajeRipeado) + "\n";
        //}else{
        //    destino.value += " Recibido: " + mensajeRipeado + "\n";
        //}
        destino.classList.add('received');

        // Limpiar el input después de enviar
        document.getElementById(origenInput).value = "";
    }
}

function rip(input) {
    let mensajeEncRIPtado = input
        .replace(/a/gi, "za9")
        .replace(/b/gi, "yb8")
        .replace(/d/gi, "xc7")
        .replace(/e/gi, "wd6")
        .replace(/g/gi, "ve5")
        .replace(/h/gi, "uf4")
        .replace(/j/gi, "tg3")
        .replace(/k/gi, "sh2")
        .replace(/m/gi, "ri1")
        .replace(/n/gi, "qj0")
        .replace(/p/gi, "pk9")
        .replace(/q/gi, "ol8")
        .replace(/s/gi, "nm7")
        .replace(/t/gi, "mn6")
        .replace(/v/gi, "lo5")
        .replace(/w/gi, "kp4")
        .replace(/y/gi, "jq3")
        .replace(/z/gi, "hr2")
        .replace(/1/gi, "gs1")
        .replace(/2/gi, "ft9")
        .replace(/4/gi, "eu8")
        .replace(/5/gi, "dv7")
        .replace(/7/gi, "cw6")
        .replace(/8/gi, "bx5")
        .replace(/ /gi, "-")
        .replace(/,/gi, "=");
        //mensajeEncRIPtado += "cf3rip";
    return mensajeEncRIPtado;
}

function drip(input) {
    //input -= "cf3rip";
    let mensaje_dencRIPtado = input
        .replace(/hrft9a9/gi, "a")
        .replace(/jq3bbx5/gi, "b")
        .replace(/xccw6/gi, "d")
        .replace(/kpeubx5d6/gi, "e")
        .replace(/lodvcw6edvcw6/gi, "g")
        .replace(/ufeubx5/gi, "h")
        .replace(/mn6g3/gi, "j")
        .replace(/nmcw6hft9/gi, "k")
        .replace(/rigs1/gi, "m")
        .replace(/olbx5j0/gi, "n")
        .replace(/pk9/gi, "p")
        .replace(/olbx5/gi, "q")
        .replace(/nmcw6/gi, "s")
        .replace(/mn6/gi, "t")
        .replace(/lodvcw6/gi, "v")
        .replace(/kpeubx5/gi, "w")
        .replace(/jq3/gi, "y")
        .replace(/hrft9/gi, "z")
        .replace(/gs1/gi, "1")
        .replace(/ft9/gi, "2")
        .replace(/eubx5/gi, "4")
        .replace(/dvcw6/gi, "5")
        .replace(/cw6/gi, "7")
        .replace(/bx5/gi, "8")
        .replace(/-/gi, " ")
        .replace(/=/gi, ",");

    return mensaje_dencRIPtado;
}

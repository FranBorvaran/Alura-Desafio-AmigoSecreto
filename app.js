// Autor: Francisca Borvarán
// Fecha: Marzo 2025
// Juego de amigo secreto


// Variables globales
let participantes = [];
let juegoIniciado = false;


// CÓDIGO PARA LIMPIAR EL NOMBRE DE CARACTERES ESPECIALES Y ESPACIOS
function limpiarNombre(nombre) {
    return nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

}

// CÓDIGO PARA REINICIAR EL JUEGO
function reiniciarJuego() {
    participantes = [];
    juegoIniciado = false;
    document.getElementById("lista-participantes").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

// CÓDIGO PARA AGREGAR PARTICIPANTES
function agregarParticipantes() {
    const inputParticipantes = document.getElementById("participantes");
    let nombre = limpiarNombre(inputParticipantes.value);


    if (juegoIniciado) {
        reiniciarJuego();
    }

    // Verifica si el nombre está vacío   
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
    } else if (participantes.some(part => limpiarNombre(part) === nombre)) {
        alert("Este nombre ya está registrado en la lista.");
    } else if (participantes.length >= 15) {
        alert("Ya no puedes agregar más participantes. El máximo es 15.");
    } else {

        // Agrega el nombre a la lista de participantes
        participantes.push(nombre);
        inputParticipantes.value = "";
        actualizarLista();
    }
}


// CÓDIGO PARA ACTUALIZAR LA LISTA DE PARTICIPANTES
function actualizarLista() {
    const listaParticipantes = document.getElementById("lista-participantes");
    listaParticipantes.innerHTML = "";

    // Crea una lista de elementos con los nombres de los participantes
    for (let i = 0; i < participantes.length; i++) {
        const li = document.createElement("li");
        li.textContent = participantes[i];
        listaParticipantes.appendChild(li);
    }
}


// CÓDIGO PARA ENCONTRAR EL GANADOR DEL SORTEO 
function sortearParticipantes() {
    const resultado = document.getElementById("resultado");

    if (participantes.length < 3) {
        alert("Faltan participantes para iniciar el sorteo. El mínimo es 3.");
        return;
    }

    // ESTE CÓDIGO ASIGNA UN GANADOR DEL SORTEO   
    let indiceAleatorio = Math.floor(Math.random() * participantes.length);
    let ganador = participantes[indiceAleatorio];

    resultado.innerHTML = `El ganador es: <strong>${ganador}</strong>`;

    juegoIniciado = true;


    //  CON ESTE CÓDIGO EL JUEGO ASIGNA UN PARTICIPANTE A OTRO, SIN REPETIR.
    /*let asignaciones = [...participantes]; 
    let valido = false;

    while (!valido) {
        asignaciones.sort(() => Math.random() - 0.5);

        valido = true;
        for (let i = 0; i < participantes.length; i++) {
            if (participantes[i] === asignaciones[i]) {
                valido = false;
                break;
            }
        }
    }

    let mensaje = "<h3>Asignaciones de Amigo Secreto:</h3><ul>";
    for (let i = 0; i < participantes.length; i++) {
        mensaje += `<li>${participantes[i]} → ${asignaciones[i]}</li>`;
    }
    mensaje += "</ul>";

    resultado.innerHTML = mensaje;*/

}

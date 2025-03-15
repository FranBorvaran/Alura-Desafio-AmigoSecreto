let participantes = [];

function agregarParticipantes() {
    const inputParticipantes = document.getElementById("participantes");
    let nombre = inputParticipantes.value.trim();

    nombre = nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); //elimina tildes y convierte en minúsculas

    if (nombre === "") { // Verifica si está vacío el campo
        alert("Por favor, ingresa un nombre."); //Alerta al usuario para que complete el nombre
    } else if (participantes.some(part => part.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() === nombre)) {// Verifica si el nombre ya existe en el array y valida la eliminación de tildes y mayúsculas
        alert("Este nombre ya está registrado en la lista."); // Si existe se muestra la aleta
    } else if (participantes.length >= 15) { // limitando el número a 20 participantes
        alert("Ya no puedes agregar más participantes. El máximo es 20.");
    } else {

        inputParticipantes.placeholder = "Agrega el nombre de otro participante"; //una vez el usuario escribe un nombre valido, le indica al usuario que debe agregar otro
        inputParticipantes.classList.remove("input-error"); //elimina la clase input-error cuando es correcto, eliminando el estilo visual del error
        inputParticipantes.classList.add("input-normal"); //Agrega los estilos visuales originales si el valor agregado es correcto

        participantes.push(nombre); // Se agrega el nombre al array
        inputParticipantes.value = ""; //Una vez agregado un nombre el campo de entrada vuelve a estar vacío
        actualizarLista(); //Mostrar la lista actualizada de nombres que se han ido agregando para que el usuario tenga la confirmación de que se ingreso correctamente

    }
}

function actualizarLista() { // Crea la lista y actualiza con los nuevos valores agregados
    const listaParticipantes = document.getElementById("lista-participantes");
    listaParticipantes.innerHTML = ""; // Limpia la lista antes de actualizar

    for (let i = 0; i < participantes.length; i++) {
        const li = document.createElement("li"); // Crea un nuevo elemento de la lista
        li.textContent = participantes[i]; // Establecer el nombre del participante.
        listaParticipantes.appendChild(li); // Agrega el elemento a la lista.
    }

}

function sortearParticipantes() { // Iniciar la función para sortear el juego
    const listaParticipantes = document.getElementById("sortearParticipantes")

    if (participantes.length < 3) { // Verifica si hay menos de 3 nombre en la lista.
        alert("Faltan participantes para iniciar el sorteo. El mínimo es 3."); // Alerta para que el usuario complete los participantes
        return;
    }
    const ganador = participantes[Math.floor(Math.random() * participantes.length)];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El ganador es: ${ganador}`;
}
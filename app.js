let participantes = [];

function agregarParticipantes() {
    const inputParticipantes = document.getElementById("participantes");
    const nombre = inputParticipantes.value.trim();

    nombre = nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); //elimina tildes y convierte en minúsculas

    if (nombre === "") { // Verifica si está vacío el campo
        alert("Por favor, ingresa un nombre."); //Alerta al usuario para que complete el nombre
    } else if (participantes.includes(nombre)) { // Verifica si el nombre ya existe en el array
        alert("Este nombre ya está registrado en la lista."); //Si existe se muestra la aleta
    } else {

        if (!nombre) { //Validamos que no sea "false" el valor agregado
            inputParticipantes.placeholder = "Agrege un nombre aquí"  //ayuda al usuario con la pista de lo que debe escribir
            inputParticipantes.classList.add("input-error"); // cambia el estilo del campo al ser un error
            inputParticipantes.classList.remove("input-normal"); // eliminamos input-normal para evitar confundir al usuarios con campos que parecen correctamente completados
            inputParticipantes.value = ""; // Esto sirve para que se limpie el campo de entrada en caso de encontrar un error
            return;
        }

        inputParticipantes.placeholder = "Agrega el nombre de otro participante"; //una vez el usuario escribe un nombre valido, le indica al usuario que debe agregar otro
        inputParticipantes.classList.remove("input-error"); //elimina la clase input-error cuando es correcto, eliminando el estilo visual del error
        inputParticipantes.classList.add("input-normal"); //Agrega los estilos visuales originales si el valor agregado es correcto

        participantes.push(nombre); // Se agrega el nombre al array
        inputParticipantes.value = ""; //Una vez agregado un nombre el campo de entrada vuelve a estar vacío
        actualizarLista(); //Mostrar la lista actualizada de nombres que se han ido agregando para que el usuario tenga la confirmación de que se ingreso correctamente

    }
}

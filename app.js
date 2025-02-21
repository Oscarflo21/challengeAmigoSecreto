let amigos = []; //declaro la variable que maneja el array "amigos" vacio

function agregarAmigo() {// Función para agregar el nombre ingresado
    const nombreInput = document.getElementById('amigo');// Obtener el valor del input
    const nombre = nombreInput.value.trim();//elimino espacios en blanco al principio y al final
    
    if (nombre !== '') { // Comprobar que el nombre no esté vacío
        amigos.push(nombre);// Agregar el nombre al array
        actualizarLista();// Actualizar la lista visualmente
        nombreInput.value = '';// Limpiar el input después de agregar el nombre
        nombreInput.focus();// Devolver el foco al input para que sea más fácil seguir agregando nombres
    } else {
        alert('Por favor, ingresa un nombre válido.');
        nombreInput.focus();//devuelvo el foco al input para que el usuario pueda ingresar un nombre
    }
}


function actualizarLista() {// Función para actualizar la lista en el DOM
    const listaAmigos = document.getElementById('listaAmigos');//obtengo el elemento listaAmigos
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos elementos
    amigos.forEach((amigo, index) => {// Recorrer el array y agregar los nombres a la lista
        const li = document.createElement('li');//creo nuevo elemnto li de la lista
        li.textContent = amigo;//agrego el nombre del amigo al elemento li
        listaAmigos.appendChild(li);//anexo el elemento li a la lista de amigos
    });
}


function sortearAmigo() {// Función para sortear un amigo secreto
    if (amigos.length < 2) {// Verificar si hay suficientes amigos para hacer el sorteo en el evento de solo tener un amigo
        alert('Necesitas al menos dos amigos para hacer el sorteo.');
        return;
    }
    const ganador = amigos[Math.floor(Math.random() * amigos.length)];// Elegir un amigo aleatorio del array
    document.getElementById('listaAmigos').style.display = 'none';// Ocultar la lista de amigos
    const resultado = document.getElementById('resultado');// Mostrar el amigo secreto sorteado
    resultado.innerHTML = `<p>El amigo secreto sorteado es: <strong>${ganador}</strong></p>`;//retorno en un parrafo el amigo secreto sorteado
    document.querySelector('.button-draw').style.display = 'none';// Mostrar nuevamente el botón para hacer otro sorteo (si lo deseas)
}

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 
// AMIGO SECRETO
// En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres 
// de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el 
// "amigo secreto".

// El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". 
// Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, 
// un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el 
// resultado en pantalla.

// FUNCIONALIDADES:
// 1. Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo 
// agregarán a una lista visible al hacer clic en "Adicionar".

// 2. Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un 
// nombre válido.

// 3. Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de 
// entrada.

// 4. Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente 
// un nombre de la lista y se mostrará en la página.

// Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    // Obtener el valor del campo de texto
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array
    listaAmigos.push(nombre);

    // Limpiar el campo de texto
    inputNombre.value = "";

    // Actualizar la lista visible en la página
    actualizarLista();
}

// // Función para actualizar la lista visible en la página
// function actualizarLista() {
//     const listaElement = document.getElementById('listaAmigos');
//     listaElement.innerHTML = "";

//     // Crear un elemento <li> por cada nombre en el array
//     listaAmigos.forEach((amigo, index) => {
//         const li = document.createElement('li');
//         li.textContent = amigo;
//         listaElement.appendChild(li);
//     });
// }
// Función para borrar toda la lista
function borrarLista() {
    listaAmigos = [];
    actualizarLista();
    document.getElementById('resultado').innerHTML = "";
}

// Función para remover un nombre específico de la lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarLista();
}

// Función para actualizar la lista visible en la página
function actualizarLista() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = "";

    // Crear un elemento <li> por cada nombre en el array
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        // Agregar espacios entre el nombre y el botón
        const espacios = document.createTextNode('\u00A0\u00A0\u00A0'); // 3 espacios
        li.appendChild(espacios);

        // Botón para remover un nombre específico
        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = "Eliminar";
        buttonRemove.className = "button-remove"; // Agregar clase para estilos
        buttonRemove.onclick = () => removerAmigo(index);
        li.appendChild(buttonRemove);

        listaElement.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificar que la lista no esté vacía
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Por favor, agrega nombres antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Obtener el nombre seleccionado
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

let tareas = [];

// al cargar la pagina, si hay tareas se muestran
window.onload = function() {
  if (localStorage.getItem("tareas")) {
    tareas = JSON.parse(localStorage.getItem("tareas"));
    mostrarTareas();
  }
};

// Función para agregar tareas. Control de tarea vacia.
function agregarTarea() {
  let nuevaTarea = document.getElementById("nuevaTarea");
  let tarea = nuevaTarea.value.trim();

  if (tarea !== "") {
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    nuevaTarea.value = "";
    mostrarTareas();
  } else {
    alert("debes introducir una tarea");
  }
}

// Función mostrar tareas. 
function mostrarTareas() {
  let lista = document.getElementById("listaTareas");
  lista.innerHTML = "";

  tareas.forEach((tarea, nuevaTarea) => {
    let li = document.createElement("li");
    li.textContent = tarea;

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.style.marginLeft = "20px";
    btnEliminar.onclick = () => eliminarTarea(nuevaTarea);

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });

  function eliminarTarea(indice) {
    tareas.splice(indice, 1); // Eliminamos del array
    localStorage.setItem("tareas", JSON.stringify(tareas)); // Actualizamos el localStorage
    mostrarTareas(); // Refrescamos la lista
  }
}

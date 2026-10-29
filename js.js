class NodoContacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.siguiente = null;
  }
}

// [Joaquin, 3759473940] --> [Maria, 3559633298] --> null

class AgendaListaEnlazada {
  constructor() {
    this.cabeza = null;
    this.fin = null;
  }

  // Insertar al inicio de la lista
  insertarInicio(nombre, telefono) {
    const nuevoNodo = new NodoContacto(nombre, telefono);
    nuevoNodo.siguiente = this.cabeza;
    this.cabeza = nuevoNodo;
     if(nuevoNodo.siguiente == null){
        this.fin=nuevoNodo;
     }
  }


insertarFinal(nombre, telefono) {
    const nuevoNodo = new NodoContacto(nombre, telefono);

    if (this.cabeza === null) {
        this.cabeza = nuevoNodo;
        this.fin = nuevoNodo;
    } else {
        this.fin.siguiente = nuevoNodo;
        this.fin = nuevoNodo;
    }
}

  // Recorrer la lista e imprimir contactos
recorrer() {
    let temporal = "";
    let actual = this.cabeza;

    while (actual !== null) {
        temporal += actual.nombre + ", " + actual.telefono + " --> ";
        actual = actual.siguiente;
    }

    return temporal;
}

}


const agenda = new AgendaListaEnlazada();

const inputNombre = document.getElementById("nombre");
const inputTelefono = document.getElementById("telefono");

const parrafo = document.getElementById("impresion");

function agregarElemento(alInicio) {
    const nombre = inputNombre.value;
    const telefono = inputTelefono.value;

    if (nombre === "" || telefono === "") {
        alert("Escribe el nombre y el telefono");
    }else{

    if (alInicio) {
        agenda.insertarInicio(nombre, telefono);
    } else {
        agenda.insertarFinal(nombre, telefono);
    }}

    parrafo.textContent = agenda.recorrer();

    inputNombre.value = "";
    inputTelefono.value = "";
}


/*crear la clase llamada contacto con los siguientes datos 
Nombre 
Apellidos 
Telefono

Despues crear una clase que sea ListaContactos la cual tendra dos metodos 
Agregar contacto 
Buscar un contacto por nombre*/

class contacto{
    constructor(Nombre, Apellidos, Telefono){
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.Telefono = Telefono;
    }
}
class listaContactos{
    constructor(lista){
        this.lista = []
    }
    agregarContacto(contacto){
        this.lista.push(contacto);
    }
    buscarContacto(nombre){
        for (const contacto of this.lista) {
            if (nombre === contacto.Nombre) {
                return contacto;
            }
        }
        return 'No se encontró el contacto!'
    }
}
const listaContacto = new listaContactos();
const contacto1 = new contacto('Jose', 'Quintana', 443444432223);
const contacto2 = new contacto('Juan', 'Quintana', 442456585221);
listaContacto.agregarContacto(contacto1);
listaContacto.agregarContacto(contacto2);
console.log(listaContacto.lista);
console.log(listaContacto.buscarContacto('leo'))

//hasta acá estoy perdio

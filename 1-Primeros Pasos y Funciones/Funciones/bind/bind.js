let persona = {
    nombre: 'Andres'
}

function saludar(){
    console.log(`Hola mi nombre es ${this.nombre}`)
}

saludar()

// esto crea una funcion que llama a saludar
let saludarPersona = saludar.bind(persona);

saludarPersona()
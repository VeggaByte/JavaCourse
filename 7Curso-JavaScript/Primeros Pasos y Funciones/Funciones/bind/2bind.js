let entrenador = {
    nombre:'andres',
    instruccion: function(){
        console.log(`mi entrenador es ${this.nombre} y yo soy el deportista ${this.deportistas}`)
    }
}

let deportistas = ['Andres', 'Carlos', 'Maria']

function AndresDeportista(){
    let instruccionAndres = entrenador.instruccion.bind(this.deportistas.AndresDeportista,this.deportistas )
}


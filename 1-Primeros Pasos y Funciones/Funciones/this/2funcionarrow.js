const miObjeto = { // es un objeto creado
    propiedad1: 5, //Propiedad
    mostrarPropiedad: function () { //metodo
        console.log(this.propiedad1)
    },

    //Ejercicio Personal
    suma: () => {
        console.log(`La propiedad 1 mas + 5 es igual a: ${this.propiedad1 + 5}`)
    }

}


miObjeto.mostrarPropiedad()
miObjeto.suma()


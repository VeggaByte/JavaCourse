const miObjeto = { // es un objeto creado
propiedad1: 5, //Propiedad
mostrarPropiedad: function(){ //metodo
    console.log(this.propiedad1);
},

//Ejercicio Personal
suma: function(){
    console.log(`el numero mas 3 es igual a ${this.propiedad1 + 3}`)
}
}

-

miObjeto.mostrarPropiedad()
miObjeto.suma()




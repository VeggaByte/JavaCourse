//Capacidades de funciones

// 1. Pasar funciones como metodos -> callback: callback es una funcion que se pasa como argumento

function a () {
}
function b (a) {
}
b(a)

// Retornar funciones
function a () {
    function b () {
    }
    return b
}

// Asignar funciones a vaiables -> Exprecion de funcion
const a = function (){
}

// Tener Propiedades y metodos

function a (){}
const obj = {}
a.call(obj)

// Anidar Funciones -> Nested Functions

function a () {
    function b () {
        function c () {

        }
        c()
    }
    b()
}
a()



// Es posible almacenar funciones en objetos? es posible!
const rocket = { //objeto
    name: 'falcon0', //propiedad
    launchMessage: function launchMessage (){ //funcion / es ademas un metodo
        console.log('3,2,1... inicio!')
    }

}
rocket.launchMessage()

// cuando una funcion se asocia con un objeto se le llama metodo




//Capacidades de metodos
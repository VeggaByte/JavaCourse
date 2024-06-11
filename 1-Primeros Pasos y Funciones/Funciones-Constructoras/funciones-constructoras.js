const personalizedMessage = () => 'Hasta Luego'



//Funciones Constructoras
function persona (name,apellido,edad,ownMessage){
    this.name = name
    this.apellido = apellido
    this.edad = edad
    this.launchMessage = () => ownMessage //Es la arrow function de this.launchmessage = function () {codigo codigo}

}

const persona1 = new persona('Andres', 'Guerra',24, personalizedMessage)
const persona2 = new persona('Jaime', 'Guerra',36)

console.log(persona1.name)
console.log(persona1.personalizedMessage)

// creando objetos a partir de arrow functions


const RocketWithArrowFunction = (name, apellido, edad, ownMessage) => ({
    name: name,
    apellido: apellido, // Se agrega 'apellido' al objeto.
    edad: edad, // Se agrega 'edad' al objeto.
    ownMessage: ownMessage
});

const personalizedMessageForArrowFunction = () => 'successfulLaunch';

const falcon9Rocket = RocketWithArrowFunction('Falcon 9', 'Apellido', 10, personalizedMessageForArrowFunction);

console.log(falcon9Rocket.name);

console.log(falcon9Rocket.ownMessage());

function dogGreeting(){
    // Esta función usa this, que se define cuando se llama
    console.log(`Guau Guau mi nombre es ${this.dogName}`);
}

const newHouse = {
    dogName: 'Firulais',
    age: 22
};

dogGreeting.call(newHouse); // Usamos call para vincular dogGreeting a newHouse










function newDogGreeting(owner, address){
    // Añadimos parámetros owner y address
    console.log(`Mi nombre es ${this.dogName} y mi dueño es ${owner} y mi edad es ${this.age}`);
}

const owner = 'Lucy';
const address = '123';

newDogGreeting.call(newHouse, owner, address,); // Llamamos a newDogGreeting con newHouse, owner y address

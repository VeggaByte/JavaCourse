const house = { // Creación del objeto house
    dogName: 'Fido',
    dogGreeting: function(){
        // Uso de this para referirse a propiedades del objeto house
        console.log(`Guau Guau mi nombre es ${this.dogName}`);
    }
};

house.dogGreeting(); // Llamada al método dogGreeting del objeto house

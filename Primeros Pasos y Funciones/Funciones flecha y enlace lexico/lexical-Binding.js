//Lexical Binding

const finctionalCaracter = {
    name: 'Uncl Ben',
    messageWhitTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWhitArrowFunction:  (message) =>
        console.log(`${this.name} says: ${message}`) // no hay vinculacion

}

finctionalCaracter.messageWhitTraditionalFunction('Whit great power comes great responsability')
finctionalCaracter.messageWhitArrowFunction('Whit great power comes great responsability') // undefined en name
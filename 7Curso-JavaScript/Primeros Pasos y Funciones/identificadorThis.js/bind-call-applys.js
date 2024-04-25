// metodos para cambiar los metodos de ejecucion

const owner = 'Lucy'
const address = '123avenue'

function dogGreeting (owner,address){
console.log(`Hola yo soy ${this.dogName} y vivo con ${owner} en ${address}`)

}

const newHouse ={ 
    dogName: 'coconut'
}

dogGreeting.call(newHouse, owner, address)




//APPLYS -> La diferencia es la forma en la que pasamos los parametros
const necesaryValues = [owner, address]
dogGreeting.apply(newHouse, necesaryValues)




//Bind 
const bindingWhitBind = dogGreeting.bind(newHouse, owner, address)
bindingWhitBind()// se vuelve una funcion independiente pero con los valores de newHouse y los parametros


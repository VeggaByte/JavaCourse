// ejercicio 

const deck = ["♠︎", "♣︎", "♥︎", "♦︎","♠︎", "♣︎", "♥︎", "♦︎","♠︎", "♣︎", "♥︎", "♦︎"]

function shuffleDeck () {
    for(i = deck.length -1; i > 0; i--){
        const j =  Math.floor(Math.random() * (i + 1)); // numero aleatorio para el indice
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
}

function dealCards(numCard){
    const dealCard = deck.splice(0, numCard) // elimina del array desde el 0 hasta el num de cartas
    return dealCard // devuelve las cartas eliminadas del array al player1, es decir muestar splice los eliminados pero es capaz de llevalos a una variable
}


shuffleDeck()
const player1 = dealCards(3)
const player2 = dealCards(3)
const player3 = dealCards(3)

console.log('Player 1 Hand:', player1)
console.log('Player 2 Hand:', player2)
console.log('Player 2 Hand:', player3)

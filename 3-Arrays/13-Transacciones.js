// Ejecicio 1 calcula el saldo total, utiliza reduce para calcular y mostrar el saldo total de las transacciones

const stransacciones = [
        {id: 1, Nombre: 'Andres', Descripcion: 'Grocery', Cantidad: -50},
        {id: 2, Nombre: 'Andres', Descripcion: 'Salary Deposit', Cantidad: 2000},
        {id: 3, Nombre: 'Andres', Descripcion: 'Utility Bill Payment', Cantidad: -100},
        {id: 4, Nombre: 'Andres', Descripcion: 'Online Shop', Cantidad: -30},
]

// 1. Calcula el saldo total
const saldoTotal = stransacciones.reduce((total, stransacciones) => total + stransacciones.Cantidad, 0)
console.log(`el saldo total es: `,saldoTotal)

// 2. Encuentra la transaccion mas grande sea un ingreso o egreso Reduce

const transaccionMasGrande = stransacciones.reduce((acc,stransacciones ) => {
return Math.abs(stransacciones.Cantidad) > Math.abs(acc.Cantidad) ? stransacciones : acc
}, stransacciones[0])
console.log(transaccionMasGrande)

// 3. filtrar compras  Filter

const compras = stransacciones.filter( transaccion => transaccion.Cantidad < 0)
console.log(compras)

// encontrar transaccion por descripcion Find
const especificTransactions = stransacciones.find(transacciones => transacciones.Descripcion === 'Online Shop')
console.log(`La transaccion especifica es: `, compras)

// 5. encuentra el index de una transaccion por la cantidad FindIndex

const index = stransacciones.findIndex(transacion => transacion.Cantidad === -30)
console.log(index)

// 6. Actualizar las descripciones de una transaccion

stransacciones.forEach(transaccionD => {
        if (transaccionD.Cantidad < 0){
                transaccionD.Descripcion = `Expense: ${transaccionD.Descripcion}`
        }else{
                transaccionD.Descripcion = `Income: ${transaccionD.Descripcion}`
        }
})
console.log(`Updated Transaccions : `, stransacciones)
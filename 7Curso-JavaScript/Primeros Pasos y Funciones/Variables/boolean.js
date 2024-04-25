// buena practica es asignar palabras dentro de la variable al inicio que identfique si algo es o tiene is o has

const isActive = true
const hasPermision = false


// conversion implicita es deir js decide si es verdad o no
const result = 5 > 3
console.log(result)

const name = 'platzi'
console.log(!!name) //  te indica si tiene un valor la variable name

// Conversion explicita nosotros decidimos si es true o falste
const value = 0
const otherValue = 24
const explicitboolean = Boolean(otherValue)
console.log(explicitboolean) // si es 0 es falso y sui es cualquier otro numero es verdadero
console.log (explicitboolean)
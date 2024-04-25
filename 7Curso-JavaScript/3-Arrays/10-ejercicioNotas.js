// ejercicio
// 

const calificaciones = [85,95,45,86,90,90,48,78,96,58,86,87,84]

const calificacionAprobatoria = calificaciones.filter(calificacion  => calificacion>= 70 )

const promedioAprobatorio = calificacionAprobatoria.reduce((acumulador, calificacion) => acumulador + calificacion, 0 ) / calificacionAprobatoria.length
console.log(calificacionAprobatoria)
console.log(promedioAprobatorio)
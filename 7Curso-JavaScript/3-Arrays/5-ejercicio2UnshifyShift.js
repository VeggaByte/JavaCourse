let musicPlayList = ['505', 'DoIWannaKnow', 'Opus']

function managePlayList(playList, nombreCancion, opcion){
    switch(opcion){
        case 1: 
        musicPlayList.unshift(nombreCancion)
        console.log(`Se ha actualizado la playlist ahora tienes estas canciones ${musicPlayList}`)
        break
        case 2:
            if(playList.length == 0){
                console.log("La PlayList esta vacia")
                console.log(playList)
            }else{
            musicPlayList.shift()
            console.log(`se ha eliminado una cancion y tu playlist queda asi ${musicPlayList}`)
            }
            break
        case 3:
            console.log(`Mostrando Playlist: `, musicPlayList)
            
    }
}

console.log(`Tienes esta PlayList ${musicPlayList} que deseas hacer?\n 1.- Agregar cancion \n 2.-Quitar cancion \n 3.- ver PlayList`)
let desicion = prompt('Escoge tu desicion') // toma una desicion
if(desicion == 1){
managePlayList(musicPlayList, prompt('Ingresa una cancion'), parseInt(desicion)) // pasa los parametros y desicion lo hace Int
}else if(desicion == 2){
    managePlayList(musicPlayList, null, parseInt(desicion))
}else if(desicion ==3){
    managePlayList(musicPlayList, null, parseInt(desicion))
}
function modificarObjeto(obj) {
    obj.propiedad = "modificado";
    console.log("Dentro de la función: ", obj);
}

let miObjeto = { propiedad: "original" };
modificarObjeto(miObjeto);
console.log("Fuera de la función: ", miObjeto); // { propiedad: "modificado" }

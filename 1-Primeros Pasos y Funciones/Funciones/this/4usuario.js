let usuario = {
    nombre: 'Andrés',
    actualizarNombre: function() {
        let s = setTimeout(()=> {
            this.nombre = 'Carlos';
            console.log(`El nuevo nombre es ${this.nombre}`);
        }, 2000);
    }
};

usuario.actualizarNombre(); // Observa qué sucede aquí

// Ahora, modifica el setTimeout usando una función flecha y observa la diferencia.


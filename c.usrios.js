let usuarioLogueado = true; // Representa la variable cond_ext
let valorCarrito = 120;     // Representa la variable para cond_int

// Condición Externa: ¿El usuario está logueado?
if (usuarioLogueado === true) {

    console.log("El usuario está registrado. Revisando el carrito...");
    
    // Condición Interna (Anidada): ¿El valor del carrito es mayor a 100?
    if (valorCarrito > 100) {
        
        // Bloque de Código Anidado (Solo se ejecuta si AMBAS son verdaderas)
        console.log("¡Condición cumplida! Se aplica un descuento del 10% en el total.");
        let descuento = valorCarrito * 0.10;
        let precioFinal = valorCarrito - descuento;
        console.log(`Precio Original: $${valorCarrito}. Precio Final: $${precioFinal}.`);

    } else {
        // Este 'else' pertenece a la condición INTERNA
        console.log("El usuario está logueado, pero el valor del carrito no alcanza el mínimo de $100 para el descuento.");
    }
    
} else {
    // Este 'else' pertenece a la condición EXTERNA
    console.log("El usuario no ha iniciado sesión. No se puede revisar si aplica para el descuento VIP.");
}
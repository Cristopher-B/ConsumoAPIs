// Crear el auto
const obtenerMemes = async () => {

    // Intentar realizar el viaje
    try {


        // Cargar gasolina y salir a buscar el paquete 
        const res = await fetch("https://api.imgflip.com/get_memes")

        // Realizar un chequeo de seguridad para asegurarnos que el paquete llegó correctamente
        if (!res.ok) throw new Error("Error al obtener memes")
        
        // Cargar al auto la respuesta del servidor convirtiendo los datos JSON en un objeto JavaScript
        const  {data}  = await res.json()

        // Desempaquetar los datos y mostrar la información en el cliente
        const contenedor = document.getElementById('list-memes')
        const plantilla = document.getElementById('meme')

        // Seleccionar los primeros 8 memes y procesarlos uno por uno
        data.memes.slice(12, 20).forEach(meme => {
            // Hacer una copia de la tarjeta para cada meme
            const tarjeta = plantilla.cloneNode(true)
            // Colocar la imagen del meme en la tarjeta
            tarjeta.querySelector('img').src = meme.url
            // Agregar la tarjeta al contenedor de la página
            contenedor.appendChild(tarjeta)
        })
         // Eliminar la plantilla original porque ya no la necesitamos
        plantilla.remove()

    // Si ocurre un problema durante el viaje, activar el plan de emergencia    
    } catch (error) {
        console.error(error.message)
    }
}

// Encender el auto y comenzar el viaje
obtenerMemes()

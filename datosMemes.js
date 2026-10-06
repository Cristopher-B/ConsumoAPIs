// Crear el auto
const obtenerMemes = async () =>{
    // Intentar realizar el viaje
    try {
        // Peticion
        // Uso de await para metodos promesa fetch
        const request = await fetch(`https://api.imgflip.com/get_memes`)

        // Respuesta
        const response = await request.json()

        console.log(response.data.memes[1].url)

    // Si ocurre un error, activar el plan de emergencia
    } catch (error){
        console.error("Error: ", error)
    }
}

// Encender el auto y comenzar el viaje
obtenerMemes()
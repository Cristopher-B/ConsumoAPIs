// Crear el auto
const btnSeleccionar = async () =>{
    // Intentar realizar el viaje
    try {
        // Generar un numero aleatorio
        const pokemon = Math.floor(Math.random()* 151) +1

        // Peticion
        // Uso de await para metodos promesa fetch
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        // Respuesta
        const response = await request.json()

        console.log(response)

        // Mostrar Nombre, warn para que se muestre en amarrillo 
        console.warn(response.name)

        // Mostrar imagen
        console.warn(response.sprites.front_default)

        // Mostrar Habilidades
        console.warn(response.abilities)

        // Si ocurre un error, activar el plan de emergencia
    } catch (error){
        console.error("Error: ", error)
    }
}

// Encender el auto y comenzar el viaje
btnSeleccionar()
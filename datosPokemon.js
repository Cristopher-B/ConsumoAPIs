// crear el auto  
const btnSeleccionar = async () => {

  // Intentar realizar el viaje
  try {

    const pokemon = Math.floor(Math.random() * 151) + 1

    // Cargar gasolina y salir a buscar el paquete 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)


    // Cargar al auto la respuesta del servidor convirtiendo los datos JSON en un objeto JavaScript
    const data = await response.json()


    // Desempaquetar los datos y mostrar la información en el cliente
    const lista = document.getElementById("listarpokemon")

    const item = lista.querySelector("#pok-1")

    // Mostrar la Imagen
    item.querySelector("img").src = data.sprites.front_default

    // Mostrar el Nombre
    item.querySelector("p").textContent = data.name


    // Mostrar las Habilidades
    const habilidades = data.abilities.map(hab => `<li>${hab.ability.name}</li>`).join("")

    item.querySelector("ol").innerHTML = habilidades

  // Si ocurre un problema durante el viaje, activar el plan de emergencia
  } catch (error) {

    console.error("Error:", error)
  }
}


// Encender el auto y comenzar el viaje
btnSeleccionar()

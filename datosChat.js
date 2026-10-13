// crear el auto 
const enviarIA =  async() => {
  // Intentar realizar el viaje
    try {
    
    // Contenedor para guardar la peticion
    const input = document.getElementById("mensaje")
    
    const chat = document.getElementById("chat")
    // Eliminar los espacios al comienzo y al final
    const texto = input.value.trim()
    
    // Si no hay texto no procesa
    if (!texto) return

    chat.innerHTML = `<p><b>Tú:</b> ${texto}</p>`

    input.value = ""

    
  const url = "https://api.groq.com/openai/v1/chat/completions"

    const req = await fetch(url,{
        method: "POST",
        headers: {
                "Authorization": "Bearer token aqui",
                "Content-Type": "application/json"
        },
        body: JSON.stringify({
                model: "openai/gpt-oss-120b",
                messages: [
                    {
                        role: "user",
                        content: texto
                    }
                ]
            })
    })

    const res = await req.json()

    console.log(res.choices[0].message.content)

    const respuesta = res.choices[0].message.content

    chat.innerHTML = `<p><b>IA:</b> ${respuesta}</p>`

    chat.scrollTop = chat.scrollHeight
    
    // Si ocurre un problema durante el viaje, activar el plan de emergencia
    } catch (error) {
        console.error("Error:", error)
    }
}


// Encender el auto y comenzar el viaje
enviarIA()

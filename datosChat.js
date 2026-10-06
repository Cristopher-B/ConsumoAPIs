const enviarIA = async () => {
    try {
        
        const API_KEY = "gsk_xxxx..." 
        const url = "https://api.groq.com/openai/v1/chat/completions"

        const request = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile", 
                messages: [
                    {
                        role: "user",
                        content: "Que es MCP"
                    }
                ]
            })
        })

        const response = await request.json()

    
        console.log(response.choices[0].message.content) 

    } catch (error) {
        console.error("Error: ", error)
    }
}

enviarIA()

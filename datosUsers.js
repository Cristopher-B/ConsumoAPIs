const url = "https://jsonplaceholder.typicode.com/users"

const obtenerUsuarios = async () => {

  try {
    const response = await fetch(url)

    const data = await response.json()


    const filas = data.map(user => 
      `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
      </tr>
      
      `).join("")

    document.getElementById("data").innerHTML = filas

  } catch (error) {
    console.error(error.message)
  }
}

obtenerUsuarios()

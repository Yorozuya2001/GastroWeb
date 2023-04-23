/* Enviamos los datos a nuestra BD */
const handleSubmit = (event, myRecipe) => {
  event.preventDefault();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(myRecipe),
  };

  fetch("http://localhost:3001/recipes", options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error al enviar los datos al servidor");
      }
    })
    .then((responseData) => {
      console.log("Datos enviados correctamente:", responseData);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default handleSubmit;

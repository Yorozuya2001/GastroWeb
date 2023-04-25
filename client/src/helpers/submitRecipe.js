/* Enviamos los datos a nuestra BD */
const handleSubmit = (event, myRecipe, setMessage) => {
  event.preventDefault();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(myRecipe),
  };

  fetch("http://localhost:3001/recipes", options)
    .then((response) => response.json())
    .then((responseData) => {
      if (!responseData.status) throw new Error(responseData.message);

      setMessage({
        text: responseData.message,
        isError: false,
      });
    })
    .catch((error) => {
      setMessage({
        text: error.message,
        isError: true,
      });
    });
};

export default handleSubmit;

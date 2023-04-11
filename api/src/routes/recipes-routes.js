const { Router } = require("express");
// Importar todos los routers;
const getRecipeById = require("../controllers/getRecipeById");
const searchRecipeByName = require("../controllers/searchRecipeByName");
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/name", async (req, res) => {
  console.log("RUTA NAME");
  try {
    const { search } = req.query;
    console.log(search);
    const data = await searchRecipeByName(search);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, image, resume, health_score, instructions } = req.body;

    const newRecipe = await createRecipe({
      name,
      image,
      resume,
      health_score,
      instructions,
    });
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:idRecipe", async (req, res) => {
  console.log("RUTA");
  try {
    const { idRecipe } = req.params;
    const recipe = await getRecipeById(idRecipe);

    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

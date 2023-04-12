const { Router } = require("express");

//Controllers;
const getRecipeById = require("../controllers/getRecipeById");
const searchRecipeByName = require("../controllers/searchRecipeByName");
const createRecipe = require("../controllers/createRecipe");

//Middlewares
const validateRecipe = require("../middlewares/validateRecipe");

const router = Router();

/**************** RECIPES ROUTES ****************/

router.get("/name", async (req, res) => {
  try {
    const { search } = req.query;
    const data = await searchRecipeByName(search);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:idRecipe", async (req, res) => {
  try {
    const { idRecipe } = req.params;
    const recipe = await getRecipeById(idRecipe);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", validateRecipe, async (req, res) => {
  try {
    const { name, image, summary, health_score, instructions } = req.body;

    await createRecipe({
      name,
      image,
      summary,
      health_score,
      instructions,
    });
    res.status(200).send("Receta creada correctamente.");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

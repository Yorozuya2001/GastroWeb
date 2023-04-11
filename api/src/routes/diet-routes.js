const { Router } = require("express");
// Importar todos los routers;
const getDiets = require("../controllers/getDiets");

const router = Router();

router.get("/", async (req, res) => {
  console.log("RUTA DIETA");
  try {
    const data = await getDiets();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

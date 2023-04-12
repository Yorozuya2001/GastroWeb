const specifyResults = (results) => {
  return results.map((result) => {
    return {
      id: result.id,
      title: result.title,
      image: result.image,
      summary: result.summary,
      healthScore: result.healthScore,
      analyzedInstructions: result.analyzedInstructions[0]?.steps.map(
        (recipeStep) => {
          return recipeStep.step;
        }
      ),
    };
  });
};

module.exports = specifyResults;

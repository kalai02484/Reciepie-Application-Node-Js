import recipes from "../models/recipeSchema.js";

export const createRecipe = async (req, res) => {
  try {
    const newRecipe = await recipes.create(req.body);
    res
      .status(200)
      .json({ message: "Recipe created successfully", data: newRecipe });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Error in creating the recipe", error: error.message });
  }
};

export const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await recipes.find();
    res
      .status(200)
      .json({ message: "Recipes fetched successfully", data: allRecipes });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Error fetching recipes", error: error.message });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await recipes.findById(id);
    if (recipe) {
      res
        .status(200)
        .json({ message: "Recipe fetched successfully", data: recipe });
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res
      .status(503)
      .json({ message: "Error fetching recipe", error: error.message });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const existingRecipe = await recipes.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (existingRecipe) {
      res
        .status(200)
        .json({ message: "Recipe updated successfully", data: existingRecipe });
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res
      .status(503)
      .json({ message: "Error updating recipe", error: error.message });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await recipes.findByIdAndDelete(id);
    if (deletedRecipe) {
      res
        .status(200)
        .json({ message: "Recipe deleted successfully", data: deletedRecipe });
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res
      .status(503)
      .json({ message: "Error deleting recipe", error: error.message });
  } 
};

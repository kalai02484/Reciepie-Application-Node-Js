const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "eggs", "bacon", "parmesan cheese"],
    instructions: "Cook pasta, fry bacon, mix with eggs and cheese",
    servings: 4,
    cookTime: 20,
  },
  {
    id: 2,
    name: "Chicken Stir Fry",
    ingredients: [
      "chicken breast",
      "bell peppers",
      "soy sauce",
      "garlic",
      "rice",
    ],
    instructions: "Cut ingredients, stir fry in hot pan, serve with rice",
    servings: 3,
    cookTime: 25,
  },
  {
    id: 3,
    name: "Tomato Pasta",
    ingredients: ["pasta", "tomatoes", "basil", "garlic", "olive oil"],
    instructions: "Cook pasta, sauté garlic, add tomatoes and basil",
    servings: 2,
    cookTime: 30,
  },
  {
    id: 4,
    name: "Caesar Salad",
    ingredients: ["romaine lettuce", "croutons", "parmesan", "caesar dressing"],
    instructions: "Chop lettuce, add croutons and dressing, top with parmesan",
    servings: 2,
    cookTime: 10,
  },
];

export const getAllRecipes = (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Recipes fetched successfully", data: recipes });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Error fetching recipes", error: error.message });
  }
};

export const getRecipeById = (req, res) => {
  try {
    const { id } = req.params;
    const recipe = recipes.find((r) => r.id == id);
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

export const createRecipe = (req, res) => {
  try {
    const { name, ingredients, instructions, servings, cooktime } = req.body;
    const newRecipe = {
      id: recipes.length + 1,
      name: name,
      ingredients: ingredients,
      instructions: instructions,
      servings: servings,
      cooktime: cooktime,
    };
    recipes.push(newRecipe);
    res
      .status(200)
      .json({ message: "Recipe created successfully", data: newRecipe });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Error in creating the recipe", error: error.message });
  }
};

export const updateRecipe = (req, res) => {
  try {
    const { id } = req.params;
    const { name, ingredients, instructions, servings, cooktime } = req.body;
    const recipeIndex = recipes.findIndex((r) => r.id == id);
    if (recipeIndex !== -1) {
      const updatedRecipe = {
        id: id,
        name: name,
        ingredients: ingredients,
        instructions: instructions,
        servings: servings,
        cooktime: cooktime,
      };
      recipes[recipeIndex] = updatedRecipe;
      res.status(200).json({ message: "Recipe updated successfully", data: updatedRecipe });
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res
      .status(503)
      .json({ message: "Error in updating the recipe", error: error.message });
  }
};

export const deleteRecipe = (req, res) => {
  try{
    const { id } = req.params;
    const recipeIndex = recipes.findIndex((r) => r.id == id);
    if(recipeIndex !== -1){
      recipes.splice(recipeIndex, 1);
      res.status(200).json({ message: "Recipe deleted successfully" });
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res
      .status(503)
      .json({ message: "Error deleting recipe", error: error.message });  
  }
};


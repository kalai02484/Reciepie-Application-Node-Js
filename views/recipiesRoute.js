import { Router } from "express"; 
import { getAllRecipes, getRecipeById, createRecipe, deleteRecipe, updateRecipe } from "../controllers/recipesController.js";

const router = Router();

// Sample route for recipes
router.get("/getalldata", getAllRecipes);
router.get("/getdata/:id", getRecipeById);
router.post("/createdata", createRecipe);
router.put("/updatedata/:id", updateRecipe);
router.delete("/deletedata/:id", deleteRecipe)

export default router;
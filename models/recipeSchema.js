import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    servings: {
        type: Number,
        required: true,
    },
    cooktime: {
        type: Number,
        required: true,
    },
});

const recipes = mongoose.model("Recipe", recipeSchema);

export default recipes;
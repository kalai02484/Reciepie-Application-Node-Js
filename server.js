import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recipeRouter from "./views/recipiesRoute.js";
import connectDB from "./database/dbConfig.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

//default middleware
app.use(cors());

app.use(express.json());

// Connect to MongoDB
connectDB();

// Default routes
app.get("/", (req, res) => {
  res.send("Welcome to the Reciepie Application API!");
});

app.use("/api/recipes", recipeRouter);


//port
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

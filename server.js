import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recipeRouter from "./views/recipiesRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Reciepie Application API!");
});

app.use("/api/recipes", recipeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

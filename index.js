const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const chefs = require("./data/chefs.json");

const recipes = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running!");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipes/:id", (req, res) => {
  const SelectedId = req.params.id;
  const selectedRecipes = recipes.filter((r) => parseInt(r.id) === parseInt(SelectedId));
  res.send(selectedRecipes);
});

app.get("/chefs/:id", (req, res) => {
  const SelectedId = req.params.id;
  const selectedChef = chefs.find((c) => parseInt(c.id) === parseInt(SelectedId));
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`api is running on port port ${port}`);
});

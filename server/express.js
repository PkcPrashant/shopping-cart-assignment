const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
var cors = require("cors");

const banners = require('./banners/index.get.json');
const categories = require('./categories/index.get.json');
const products = require('./products/index.get.json');
const cart = require('./addToCart/index.post.json');

app.use(express.json());
app.use(cors());

app.get("/banners", (req, res) => {
  res.send(banners);
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.post('/addToCart', (req, res) => {
  res.send(cart);
});

app.post("/newcourse", (req, res) => {
  res.json({ msg: "success" });
});

app.delete("/courses/:id", (req, res) => {
  res.json({ msg: "success" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

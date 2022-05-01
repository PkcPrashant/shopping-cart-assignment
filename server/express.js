const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
var cors = require("cors");

const banners = require('./banners/index.get.json');

app.use(express.json());
app.use(cors());

app.get("/banners", (req, res) => {
  res.send(banners);
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
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

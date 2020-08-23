const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render(`The port is ${port}`);
});

app.listen(port, () => {
  console.log("Listening to port 3000.");
});
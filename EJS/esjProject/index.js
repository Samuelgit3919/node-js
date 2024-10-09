import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.render("confirmation", { name, email });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

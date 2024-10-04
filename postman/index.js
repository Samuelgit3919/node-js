import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.post("/registery", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/sami", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/sami", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/sami", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

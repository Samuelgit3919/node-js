import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Wolrd");
});

app.get("/about", (req, res) => {
  res.send("<h1>About me</h1><p>my name is sami</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact us</h1><p>contact us using call</p>");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});

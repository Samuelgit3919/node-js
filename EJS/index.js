// const express = require("express");
import express from "express";
import ejs from "ejs";
const app = express();

// Set 'ejs' as the view engine
app.set("view engine", "ejs");

// Serve static files if needed
app.use(express.static("views"));

// Define a simple route
app.get("/", (req, res) => {
  res.render("index", { title: "Welcome", message: "Hello, World!" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

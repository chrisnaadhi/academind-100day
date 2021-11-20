// Dependencies
const path = require("path");

const express = require("express");

const defaultRoutes = require("./routes/default");
const restaurantsRoutes = require("./routes/restaurants");

const app = express();

// Middleware for EJS Template
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware for Public and Style
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Middleware for routing to Routes folder
app.use('/', defaultRoutes);
app.use('/', restaurantsRoutes);

// Middleware for 404 / 500 Pages
app.use((req, res) => {
  res.status(404).render("404");
});

app.use((error, req, res, next) => {
  res.status(500).render("500");
});

// HTTP Ports Express
app.listen(3000);

const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
require('dotenv').config()
const port = process.env.PORT || 4000;

// public static path
const static_path =  path.join(__dirname, "../public");
const template_path =  path.join(__dirname, "../templates/views");
const partials_path =  path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routing
app.get("/", (req, res) => {
    res.render('index');
})

app.get("/contact", (req, res) => {
    res.render('contact');
})

app.get("/weather", (req, res) => {
    res.render("weather");
}) 

app.get("/currentWeatherData", (req, res) => {
    res.render("currentWeatherData");
}) 

app.get("/developer", (req, res) => {
    res.render("developer");
}) 

app.get("*", (req, res) => {
    res.render("404error");
})

// listening server
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})
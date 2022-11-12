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
app.get("", (req, res) => {
    res.render('index.hbs');
})

app.get("/contact", (req, res) => {
    res.render('contact.hbs');
})

app.get("/weather", (req, res) => {
    res.render("weather.hbs");
})

app.get("*", (req, res) => {
    res.render("404error.hbs", {
        errorMessage: 'Oops! Page not found'
    });
})

// listening server
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})
const express = require("express");
app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/services", (req, res) => {
    res.render("services");
});

app.listen(3000, () => {
    console.log("AW Server listening on 3000");
});
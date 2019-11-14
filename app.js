const express = require("express");
app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000, () => {
    console.log("AW Server listening on 3000");
});
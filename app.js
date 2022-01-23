const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    let today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    
    
    
    
    let currentDay = today.getDay();
    let day = "";
    const dias = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    day = dias[currentDay-1]
    res.render("list", { day: day });
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});


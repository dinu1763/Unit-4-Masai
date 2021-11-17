const express = require("express");

const app = express();

app.get("/", (req, res) =>{  
    res.send("Welcome to Home page")
});

app.get("/users", (req, res) =>{
    var users = require("./users")
    res.send(users)
});

app.listen(1234, () =>{
    console.log("Listening on Port 1234")
})
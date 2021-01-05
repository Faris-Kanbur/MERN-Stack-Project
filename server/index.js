const express = require("express");
const app = express();
const mongoose = require('mongoose')


/// DATABASE Connection

mongoose.connect("mongodb://localhost:27017/tutorialMern?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
{useNewUrlParser:true})

app.listen(3001, () => {
    console.log("You are connected");
});
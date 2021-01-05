const express = require("express");
const app = express();
const mongoose = require('mongoose');
const FriendModel = require('./models/Friends');

/// DATABASE Connection

mongoose.connect("mongodb://localhost:27017/tutorialMern?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
{useNewUrlParser:true})

app.get('/insert', async (req, res) => {
    const friend = new FriendModel({ name: "Faris", age: 28});
    await friend.save();
    res.send("inserted DATA");
});
app.get('/read', async (req, res) => {
    FriendModel.find({}, (err, result) =>{
        if(err){
            res.send(err)
        } else {
            res.send(result)
        }
    });
});

app.listen(3002, () => {
    console.log("You are connected");
});
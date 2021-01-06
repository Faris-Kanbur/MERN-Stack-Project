const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const FriendModel = require('./models/Friends');


app.use(cors());
app.use(express.json());

/// DATABASE Connection

mongoose.connect("mongodb://localhost:27017/tutorialMern?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
{useNewUrlParser:true})

app.post('/addfriend', async (req, res) => {
    const name = req.body.name;
    const age = req.body.age;


    const friend = new FriendModel({ name: name, age: age });
    await friend.save();
    res.send("Success");
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

app.listen(3003, () => {
    console.log("You are connected");
});
const express = require('express');

const app = express();

app.get('/fruit', (req, res)=>{
    res.send("Hi, This is Fruit")
});

app.listen(5000, () => console.log("server start at 5000"));
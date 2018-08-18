const express = require('express');
const app = express();
const port=8080;
const ejs =require("ejs");
const path=require("path");



app.set('views',path.join(__dirname,"views"))
app.set('public',path.join(__dirname,"public"))
app.set ('view engine','ejs');

const samsung=["galaxy","note","metro"
]
app.get('/', function (req, res) {
  res.render('index',{samsung:samsung});
})

app.listen(port, (req,res)=>console.log(`server at ${port}`));
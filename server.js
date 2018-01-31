const express = require('express');
const app = express();
const env = require('dotenv').config();

app.use(express.static('public'));

app.use(session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false
}))


app.listen(3000, ()=>{
  console.log("EventShip is listening");
})

const express = require('express');
const app = express();
const env = require('dotenv').config();

app.use(express.static('public'));

//setting up basic GET route for testing
// app.get('/getEvents', (request, response) => {
// 	response.send('here are some events you requested info for...')
// });

// app.use(session({
// 	secret: process.env.SECRET,
// 	resave: false,
// 	saveUninitialized: false
// }))


app.listen(3000, ()=>{
  console.log("EventShip is listening");
})

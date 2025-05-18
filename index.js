require('dotenv').config(); // Load variables from .env


// Import express
const express = require('express');

// Create an app
const app = express();

// Define a route (GET request)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/abhilash',(req,res)=>{
   
    res.send("Abhilash.E")
  
})

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

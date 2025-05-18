require('dotenv').config(); // Load variables from .env


// Import express
const express = require('express');

// Create an app
const app = express();

const testing ={"type":"general","setup":"What do elves post on Social Media?","punchline":"Elf-ies.","id":401}

// Define a route (GET request)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/abhilash',(req,res)=>{
   
    res.send("Abhilash.E")
  
})

app.get("/testing",(req,res) =>{
    res.send(testing)
})

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

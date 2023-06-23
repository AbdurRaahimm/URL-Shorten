const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();



app.get("/", (req, res)=>{
    return res.send("MongoDB Connected Template");
    
})


const port = process.env.PORT || 5001;
app.listen(port, async() => {
  console.log(`Server running at http://localhost:${port}`);
  await connectDB();
});

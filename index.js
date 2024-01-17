const express = require('express');
const app = express();
const connectDB = require('./config/db');


// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
app.use('/', require('./routes/redirect'));
app.use('/api', require('./routes/urls'));


app.get("/", (req, res)=>{
  res.json({message:`API running`});
})


const port = process.env.PORT || 3001;
app.listen(port, async() => {
  console.log(`Server running on http://localhost:${port}`);
  await connectDB();
});
const express = require('express');
const app = express();


app.use("/hello",(req,res)=>{
  res.send('Hai Naresh!');
});


app.use("/test",(req,res)=>{
  res.send('Hai Test!');
});

app.use("/",(req,res)=>{
  res.send('Hello from Express!');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
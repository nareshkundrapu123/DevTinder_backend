const express = require('express');
const app = express();

// app.get("/user/:userId",(req,res)=>{
//   console.log(req.params);
//   res.send({firstName: "Naresh", lastName: "Kundrapu"});
// });

app.use("/user",(req,res,next)=>{
  console.log("Handling the router user");
  //res.send("Response!");
  next();  
},
(req,res,next)=>{
  console.log("Handling the router user 2");
  // res.send("2 Response!");
  next();                                                 
},
(req,res,next)=>{
  console.log("Handling the router user 3");
  // res.send("3 Response!");                                 
  next();
} ,(req,res,next)=>{
  console.log("Handling the router user 4");
   res.send("4 Response!");                                 
} );

// Regex
// app.get(/ab/,(req,res)=>{
//   res.send({firstName: "Naresh", lastName: "Kundrapu"}                  );
// });

// app.post("/user",(req,res)=>{
//   res.send("Data is saved successfully"); 
// });


// app.delete("/user",(req,res)=>{
//   res.send("data is deleted successfully"); 
// });

// app.use("/hello/guru",(req,res)=>{
//   res.send('Hai guru!');
// });

// app.use("/hello",(req,res)=>{
//   res.send('Hai Naresh!');
// });


// app.use("/test",(req,res)=>{
//   res.send('Hai Test!');
// });

// app.use("/",(req,res)=>{
//   res.send('Hello from Express!');
// });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
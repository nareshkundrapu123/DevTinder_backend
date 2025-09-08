const express = require('express');
const {dbconnect}= require('./config/database');
const User= require('./model/user');
const app = express();

// const {adminAuth,userAuth} = require("./middleware/auth");

app.post("/signup", async (req,res)=>{

  const user= new User({
    firstName: "virat",
    lastName: "Kohli",
    email: "nareshlesnar11288@gmail.com",
    password: "Naresh1998",
    age: 25
  });
  await user.save();
  res.send("User signed up successfully");
});
app.get("/users", async (req,res)=>{
  const users= await User.find();
  res.json(users);
});
app.delete("/deleteUser/:firstName", async (req,res)=>{
  const userId= req.params.firstName;
  await User.firstName(firstName);
  res.send("User deleted successfully");
});

 dbconnect().then(()=>{
    console.log("DataBase connected successfully");
    
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
 }).catch((err)=>{
    console.log("DataBase connection failed",err);
 });


// app.use("/admin", adminAuth );

// app.get("/user", userAuth, (req, res) => {
//   res.send("User data sent successfully"); 
// });
// app.get("/admin/getAllData",(req,res)=>{
//   //check if the request is authenticated
//   //logic of fetching all data from db
  
//   res.send("getAllData");
  
// });

// app.get("/admin/Deleteuser",(req,res)=>{
//   //logic of delete from db
//   res.send("Deleteuser");
// });



// app.get("/getUserdata",(req,res)=>{

//   try{
//   throw new Error("Some error occured while fetching user data");
//   res.send("getUserdata sent");

//   }
//   catch(err){
//     res.status(500).send("Some error occured while fetching user data");
//   }
// });
// app.use("/",(err,req,res,next)=>{
  
//   res.status(500).send('Something broke! ');
// });


// app.get("/user/:userId",(req,res)=>{
//   console.log(req.params);
//   res.send({firstName: "Naresh", lastName: "Kundrapu"});
// });

// app.use("/user",(req,res,next)=>{
//   console.log("Handling the router user");
//   //res.send("Response!");
//   next();  
// },
// (req,res,next)=>{
//   console.log("Handling the router user 2");
//   // res.send("2 Response!");
//   next();                                                 
// },
// (req,res,next)=>{
//   console.log("Handling the router user 3");
//   // res.send("3 Response!");                                 
//   next();
// } ,(req,res,next)=>{
//   console.log("Handling the router user 4");
//    res.send("4 Response!");                                 
// } );

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

//Go to the mongodb atlas and create a cluster and get the connection string
//Create a free MO cluster
//Create a user and password
//get the connection string
//Install mongodb compass


const mongoose = require("mongoose");

const dbconnect= async()=>{


mongoose.connect("mongodb+srv://namasteydev:Naresh1998@namesteynode.azrncwa.mongodb.net/devTinder");

};


 module.exports={dbconnect};

// const {MongoClient}= require("mongodb");



// const url="mongodb+srv://namasteydev:Naresh1998@namesteynode.azrncwa.mongodb.net/"

// const client=new MongoClient(url);

// const dbName="HelloWorld";
 
// async function main(){
//   await client.connect();
//   console.log("DataBase connected successfully");
//   const db=client.db(dbName);
//   const collection=db.collection("User");

//   const data= {
//     "firstName":"Virat",
//     "lastName":"Kohli",
//     "city":"Delhi",
//     "phone":"1234567890",
//   };

    //insert
//     const insertResult = await collection.insertMany([data]);
// console.log('Inserted documents =>', insertResult);

  //find
// const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);

//count
// const count = await collection.countDocuments({});
// console.log("Count of documents in the update=>",count);


// const result = await collection.find({"firstName":"Virat"}).count();

// console.log("Result =>",result);
   
// return "done.";
// }



// main()
// .then(console.log)
// .catch(console.error)
// .finally(()=>client.close());   

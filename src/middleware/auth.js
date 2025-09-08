const adminAuth =(req,res,next)=>{
  const token = "abcd1234";
  const isAdmin = token === "abcd1234";
  if(!isAdmin){
    return res.status(401).send("Unauthorized request");
  }
  else{
    next();
  }
};

const userAuth =(req,res,next)=>{
  const token = "abcd1234";
  const isAdmin = token === "abcd                                                               ";
  if(!isAdmin){
    return res.status(401).send("Unauthorized request");
  }
  else{
    next();
  }
};


module.exports = {adminAuth,userAuth};
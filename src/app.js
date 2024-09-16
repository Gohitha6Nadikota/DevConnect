const express=require('express');

const app=express();
app.use("/",(req,res)=>{
    res.send("Hello from Server");
})
app.use("/home", (req, res) => {
  res.send("Hello from Home Page");
});
app.listen(7777,()=>{
    console.log("Server Started");
});
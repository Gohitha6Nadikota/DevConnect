const express=require('express');

const app=express();
app.get('/user/:userId',(req,res)=>{
  console.log(req.params)
  res.send("Data Sent");
})
app.post('/user',(req,res)=>{
  console.log(req.query)
  res.send("Data Saved");
})
app.delete('/user',(req,res)=>{
  res.send("Data deleted");
})
app.patch('/user',(req,res)=>{
  res.send("Data patched")
})
app.put('/user',(req,res)=>{
  res.send("Data modified")
})
app.listen(7777,()=>{
    console.log("Server Started");
});
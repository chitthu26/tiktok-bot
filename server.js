const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
res.send("TikTok Bot Running");
});

app.post("/webhook",(req,res)=>{

let comment = req.body.comment;

if(comment && comment.includes("price")){
console.log("Auto reply triggered");
}

res.sendStatus(200);

});

app.listen(3000,()=>{
console.log("Server started");
});

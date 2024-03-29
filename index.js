const express = require('express');
const app =express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(express.json());

const blog = require("./routes/blog");

app.use(blog);

const DBConnection = require("./config/database");
DBConnection();

app.listen(PORT,()=>{
    console.log(`app is running successfully at port no ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("Hello from home page");
})

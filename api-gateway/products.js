const express=require("express")
const app=express()
require("./config/db")

app.use(express.json())

app.get("/products",(req,res)=>{
    res.json({message:'products'})
})


app.listen(5000,()=>{
    console.log('server on port 5000')
})
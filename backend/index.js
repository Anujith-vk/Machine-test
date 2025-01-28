require('dotenv').config();
const express=require('express')
const app=express()
const cors=require('cors')
const port=process.env.PORT
const mongoose=require('./Database/db')
const route=require('./Routes/Route')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/',route)

app.listen(port,()=>{
    console.log(`Server Running at http://localhost:${port}`);
})
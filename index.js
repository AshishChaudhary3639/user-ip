const express=require('express')
const { conncetion } = require('./config/db')
const { ipRouter } = require('./routes/ip.route')
require('dotenv').config()
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
app.use("/",ipRouter)
app.listen(process.env.PORT,async()=>{
  try {
    await conncetion
    console.log('DB connected')
  } catch (error) {
    console.log('DB not connected')
    
  }
})


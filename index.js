// Make an HTTP request to an external API to get the user's IP address

const express=require('express')
require('dotenv').config()
const { conncetion } = require('./config/db')
const { IPRouter } = require('./routes/ip.route')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
app.use("/",IPRouter)
app.listen(process.env.PORT,async()=>{
  try {
    await conncetion
    console.log('DB connected')
  } catch (error) {
    console.log('DB not connected')
    
  }
})


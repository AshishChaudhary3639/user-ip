const mongoose=require('mongoose')
require('dotenv').config()
const conncetion=mongoose.connect(`${process.env.MONGO_URL_IP}`)

module.exports={conncetion}
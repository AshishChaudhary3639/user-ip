const mongoose=require('mongoose')

const IPSchema=mongoose.Schema({
    ip:String
})

const IPModel=mongoose.model('user-ip',IPSchema)

module.exports={IPModel}
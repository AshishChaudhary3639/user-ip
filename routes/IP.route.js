const {Router}=require('express')
const { IPModel } = require('../models/IP.model')

const IPRouter=Router()

IPRouter.post('/addip',async(req,res)=>{

    const ip=req.body.ip
    let isExist=await IPModel.findOne({ip})
    if(isExist){
        res.send({'err':"User ip already exist"})
    }
    else{
        console.log("ips",req.body)
        if(ip!==null){
            try {
                let userIP=new IPModel({ip:ip})
                await userIP.save()
                res.send({"success":"IP stored success"})
            } catch (error) {
                console.log(error)
                res.send({"err":"IP not stored"})
                
            }
        }
    }

})


module.exports={IPRouter}
var express=require('express')
var router=express.Router()
var mongodb=require('mongodb')
router.post('/save-que',async function(req,res,next){//received the request
    try{
    //take the data from req
    const dataObj=req.body.data
    //connect with db
    // const url='mongodb://localhost:27017'
    const url="mongodb+srv://nit9am:nit9am@9am.7ivlfrl.mongodb.net/"
    const mongodbClient=mongodb.MongoClient
    const server=await mongodbClient.connect(url)
    const db=server.db('school')
    const collection=db.collection('questions')
    //perform required operations
    const result=await collection.insertOne(dataObj)

    //prepare and send response back to client
    res.send(result)
    }catch(e){
        console.log(e)
        res.send(e)
    }
})

module.exports=router;
var express=require('express')
var router=express.Router()

router.get('/get-test',function(req,res){//request received
//take the data from request
//connect with db
//perform required operations
//prepare and send the response back to client
   res.send('My name is Sachin, I am from Mumbai')
})

router.get('/test-query',function(req,res,next){//request received
//take the data from request
   const n=req.query.name  
   const l=req.query.loc
   res.send(`My name is ${n}, I am from ${l}`)
})

router.patch('/test-path/:name/:loc',function(req,res,next){//request received
//take the data from request
   const n=req.params.name
   const l=req.params.loc
   res.send(`My name is ${n}, I am from ${l}`)
})

router.put('/test-headers',function(req,res,next){//request received
   //take the data from request
      const n=req.headers.name
      const l=req.headers.loc
      res.send(`My name is ${n}, I am from ${l}`)
   })

router.post('/test-body',function(req,res,next){//request received
   //take the data from request
      const n=req.body.name
      const l=req.body.loc
      res.send(`My name is ${n}, I am from ${l}`)
   })
   
module.exports=router;
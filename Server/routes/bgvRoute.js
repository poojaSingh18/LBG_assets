var express=require('express');
var router=express.Router();
var bgvDocument=require('../models/bgvDocument.js');

router.get('/getBgvDetails',function(req,res)
{
  bgvDocument.getBgvDetails(employeeId,function(err,data)
  {
    //write code here---------------
  })
});

router.post('/modifyBgvDetails',function(req,res)
{
  bgvDocument.modifyBgvDetails(employeeId,bgvObject,function(err,data)
  {
    //write code her-------------
  })
})

module.exports=router;

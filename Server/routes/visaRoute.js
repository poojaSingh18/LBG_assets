var express=require('express');
var router=express.Router();
var visaDocument=require('../models/visaDocument.js');

router.get('/getVisaDetails',function(req,res)
{
  visaDocument.getVisaDetails(employeeId,function(err,data)
  {
    //write code here---------------
  })
});

router.post('/modifyVisaDetails',function(req,res)
{
  visaDocument.modifyVisaDetails(employeeId,visaObject,function(err,data)
  {
    //write code her-------------
  })
});

module.exports=router;

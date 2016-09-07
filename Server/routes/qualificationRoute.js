var express=require('express');
var router=express.Router();
var qualificationDocument=require('../models/qualification.js');

router.get('/getQualificationDetails',function(req,res)
{
  qualificationDocument.getQualificationDetails(employeeId,function(err,data)
  {
    //write code here---------------
  })
});

router.post('/modifyQualificationDetails',function(req,res)
{
  qualificationDocument.modifyQualificationDetails(employeeId,qualificationObject,function(err,data)
  {
    //write code her-------------
  })
})

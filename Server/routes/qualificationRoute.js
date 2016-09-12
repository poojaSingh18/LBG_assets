var express=require('express');
var router=express.Router();
var qualificationDocument=require('../models/qualification.js');

router.get('/getQualificationDetails/:empNo',function(req,res)
{
  console.log("indie qualif");
  qualificationDocument.getQualificationDetails(req.params.empNo,function(err,data)
  {
    if(!err)
    {
      console.log(data);
      res.send(data);
    }
  })
});

router.post('/modifyQualificationDetails',function(req,res)
{
  qualificationDocument.modifyQualificationDetails(employeeId,qualificationObject,function(err,data)
  {
    //write code her-------------
  })
});

router.post('/insetQualificationDetails',function(req,res)
  {
    qualificationDocument.insetQualificationDetails(function(err,result)
    {
    if(!err)
      {
        console.log("qualification detials are inserted");
        res.send("qualification is done");
      }
    })
  })
module.exports=router;

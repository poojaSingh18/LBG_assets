var express=require('express');
var router=express.Router();
var bgvDocument=require('../models/bgvDocument.js');
var employee=require('../models/employee.js');

console.log("in routes----",employee);
router.get('/getBgvDetails/:empNo',function(req,res)
{
  bgvDocument.getBgvDetails(req.params.empNo,function(err,data)
  {
    if(!err){
      console.log("Get BGV Details: " + data);
      res.send(data);
    }
  })
});

router.post('/modifyBgvDetails',function(req,res)
{
  bgvDocument.modifyBgvDetails(employeeId,bgvObject,function(err,data)
  {
    //write code her-------------
  })
})

router.post('/insertBgvDetails',function(req,res)
{
  bgvDocument.addBgvDetails(function(err,data)
{
  if(!err){

    console.log("record is added");
    res.send("inserted");

  }
});
})

module.exports=router;

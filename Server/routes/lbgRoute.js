var express=require('express');
var router=express.Router();
var employee=require('../models/employee.js');


router.get('/addEmployee',function(req,res)
{
  console.log("hello");
    employee.addEmployee({employeeId:"1235",employeeName:"srika"},function(err,data)
   {
     if(!err)
       console.log("added");
   })
  res.send("inside the route");
});

router.get('/getVisaDetails',function(req,res)
{

});

router.post('/modifyVisaDetails',function(req,res)
{

});

module.exports = router;

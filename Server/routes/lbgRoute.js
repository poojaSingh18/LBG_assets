var express=require('express');
var router=express.Router();
var employee=require('../models/employee.js');


// router.get('/getEmployees',function(req,res)
// {
//   console.log("hello");
//     employee.addEmployee(function(err,data)
//    {
//      if(!err)
//        console.log("added");
//    })
//   res.send("inside the route");
// });

router.get('/getVisaDetails',function(req,res)
{

});

router.post('/modifyVisaDetails',function(req,res)
{

});

router.get('/getEmployees/:towerType',function(req,res)
{console.log("get employees");
  employee.getEmployees(req.params.towerType,function(data)
{
  if(data!=null)
    res.send(data);
})
 });

module.exports = router;

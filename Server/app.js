var express=require('express');
var path = require('path');
var app=express();
var mongoose=require('mongoose');
var lbgRoute=require('./routes/lbgRoute.js');
var bgvRoute=require('./routes/bgvRoute.js');
var qualificationRoute=require('./routes/qualificationRoute.js');
var visaRoute=require('./routes/visaRoute.js');
var employee=require('./models/employee.js');

mongoose.connect('mongodb://localhost/lbg');

app.use('/',express.static(path.join(__dirname, '../Client')));

app.use('/lbgRoute',lbgRoute);
app.use('/bgvRoute',bgvRoute);
app.use('/qualificationRoute',qualificationRoute);
app.use('/visaRoute',visaRoute);
console.log("empo--------",employee);
app.listen(8080,function()
{
  console.log("started....");
});

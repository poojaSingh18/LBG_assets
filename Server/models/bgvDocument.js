var mongoose=require('mongoose');
var employee=require('./employee.js');
var user=require('./user.js');
console.log("employee.js------",employee,"user-------",user);
var bgvSchema=mongoose.Schema({
    empNo:String,
    indent_Direct_Allocation: String,
  	bgvRequested: String,
  	bgvInitiatedDate: String,
  	bgvCompletionDate: String,
  	bgvStatus: String,
  	bgvExpectedCompletionDate: String,
  	bgvRemarks: String,
  	ct_id_Creation: String,
  	rsaToken: String,
  	desktopAvailable: String
});



bgvSchema.statics.addBgvDetails=function(callback)
  {
  console.log("insdie model");
  this.create({
    empNo:"326322",
    bgvRequested: "",
    bgvInitiatedDate: "1-09-16",
    bgvCompletionDate: "12-09-16",
    bgvStatus: "completed",
    bgvExpectedCompletionDate: "",
    bgvRemarks:"Cleared on 12-09-16",
    ct_id_Creation: "",
    rsaToken: "",
    desktopAvailable:""
  },
function(err,data)
{
  if(!err)
  {

  callback(null,data);
  }
  else {
    console.log("err-----------",err);
  }
})
};

//get bgvDetails based on employee number....
bgvSchema.statics.getBgvDetails=function(empNo,callback)
{
  this.findOne({
    "empNo":empNo
  },function(err,bgvObject)
  {
    if(!err)
      {
        console.log("Model -- Get BGV Details : ", bgvObject);
        callback(null,bgvObject);
      }
    else {
      console.log("err---",err);
      callback(err,null);
    }
  })
}

bgvSchema.statics.updateBgvDetails=function(empNo,newBgvObject,callback)
{
  this.find({
    "empNo":empNo
  })
  .exec(function(err,oldBgvObject)
  {
  //oldBgvObject.
  })
}
module.exports=mongoose.model('bgvDocument',bgvSchema,'bgvDocuments');

var mongoose=require('mongoose');


var employeeSchema=new mongoose.Schema({
empNo:String,
empName:String,
allocationStatus: String,
empBand:String,
location:String,
mentor:String,
proposedLocation:String,
travelStatus:String,
deploymentReadyTimeFrame:String,
criticality:String,
visaExpiry:{type:Date},
tower:String,
l1_select:String,
theme:{
    recommendedTheme:String,
    recommendedSubTheme:String,
    themeCell:{
               recommendedCellType:String,
               recommendedCell:String,
               recommendedRole:String,
               seedMember:String
    }

}
});

employeeSchema.statics.addEmployee=function(data,callback)
{
  console.log("insdie model");
  this.create({
    employeeId:data.employeeId,
    employeeName:data.employeeName
  },
function(err,data)
{
  if(!err)
  callback(null,data);
})
};

module.exports=mongoose.model('employee',employeeSchema,'employees');

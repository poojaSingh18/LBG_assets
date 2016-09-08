var mongoose=require('mongoose');

var employeeSchema=new mongoose.Schema({
empNo:String,
empName:String,
allocationStatus: String,
empBand:String,
location:String,
mentor:String,
proposedLocation:String,
bgvStatus:String,
travelStatus:String,
visaStatus:String,
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

employeeSchema.statics.addEmployee=function(callback)
{
  console.log("insdie model");
  this.create({
    empNo:'326433',
    empName:'Vishnu Sampath',
    allocationStatus: 'Extended in same project',
    empBand:'Group L1',
    location:'Bangalore',
    mentor:'Gunjan Gupta',
    proposedLocation:'UK',
    bgvStatus:"completed",
    travelStatus:'',
    visaStatus:"initiated",
    deploymentReadyTimeFrame:'',
    criticality:'Y',
    visaExpiry:'',
    tower:'ADM',
    l1_select:'Y',
    theme:{
        recommendedTheme:'',
        recommendedSubTheme:'',
        themeCell:{
                   recommendedCellType:'',
                   recommendedCell:'',
                   recommendedRole:'',
                   seedMember:''
        }

    }
  },
function(err,data)
{
  if(!err)
  callback(null,data);
})
};

employeeSchema.statics.getEmployees=function(towerType,callback)
{
  this.find({
    "tower":towerType
  }).exec(function(err,data)
{
  if(!err)
    callback(data);
  else
  callback(null);
})
}



module.exports=mongoose.model('employee',employeeSchema,'employees');

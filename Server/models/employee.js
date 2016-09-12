var mongoose=require('mongoose');
var bgv=require('./bgvDocument.js');

console.log("bgv---",bgv);
var employeeSchema=new mongoose.Schema({
  empNo:{type:String,unique:true},
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
  visaExpiry:String,
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
    empNo:'326322',
    empName:'Anand Shukla',
    allocationStatus: 'Extended in same project',
    empBand:'Group L1',
    location:'Mumbai',
    mentor:'Amit',
    proposedLocation:'UK',
    bgvStatus:"completed",
    travelStatus:'',
    visaStatus:"initiated",
    deploymentReadyTimeFrame:'',
    criticality:'Y',
    visaExpiry:'',
    tower:'ASM',
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
  {
    console.log("no error");
    callback(null,data);
  }

  else {
    console.log("err--",err);

  }
})
};

// employeeSchema.statics.updateEmployee=function(dataObject,callback)
// {
//   console.log("dataObject---",dataObject);
//   this.find({
//     "empNo":dataObject.empNo
//   },function(err,data)
//   {
//     if(!err)
//       {
//         data.bgvDetails=dataObject.bgvId;
//         data.save(function(err,result)
//           {
//             if(!err)
//               {
//                 callback(null,result);
//               }
//               else {
//                 console.log("err----",err);
//               }
//           })
//       }
//       else {
//         console.log("err----",err);
//       }
//   })
// };

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
};

module.exports=mongoose.model('employee',employeeSchema,'employees');

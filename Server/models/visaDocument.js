var mongoose=require('mongoose');

var visaShcema=mongoose.Schema({
    empNo: String,
  	visaStatus:String,
  	visaInitiated: String,
  	visaType: String,
  	initialTravelValidity: String,
  	plannedTravelDate: String,
  	actualTravelDate: String,
  	ukProjectStartDate: String
});


visaShcema.statics.insertVisaDetails=function(callback)
{
  this.create({
    empNo: '326322',
  	visaStatus:'completed',
  	visaInitiated: '',
  	visaType: 'long term',
  	initialTravelValidity: '>1 year',
  	plannedTravelDate: '12-09-2016',
  	actualTravelDate: '12-09-2016',
  	ukProjectStartDate: ''
  },function(err,result)
  {
    if(!err)
      {
        console.log("visa detials are inserted");
        callback(null,result)
      }
    else {
        console.log("error----",err);
    }
  })
}

visaShcema.statics.getVisaDetails=function(empNo,callback)
{
  this.findOne({
    "empNo":empNo
  },function(err,visaObject)
  {
    if(!err)
      {
        callback(null,visaObject);
      }
    else {
      console.log(" error-",err);
    }
  })
}
module.exports=mongoose.model('visaDocument',visaShcema,'visaDocuments');

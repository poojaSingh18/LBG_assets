var mongoose=require('mongoose');

var visaShcema=mongoose.Schema({
    empNo: String,
  	visaStatus:String,
  	visaInitiated: String,
  	visaType: String,
  	initialTravelValidity: String,
  	plannedTravelDate: Date,
  	actualTravelDate: Date,
  	ukProjectStartDate: Date
});

module.exports=mongoose.model('visaDocument',visaShcema,'visaDocuments');

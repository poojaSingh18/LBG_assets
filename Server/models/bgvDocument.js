var mongoose=require('mongoose');

var bgvSchema=mongoose.Schema({
  indent_Direct_Allocation: String,
  	bgvRequested: Date,
  	bgvInitiatedDate: Date,
  	bgvCompletionDate: Date,
  	bgvStatus: String,
  	bgvExpectedCompletionDate: Date,
  	bgvRemarks: String,
  	ct_id_Creation: String,
  	rsaToken: String,
  	desktopAvailable: String
});

module.exports=mongoose.model('bgvDocument',bgvSchema,'bgvDocuments');

var mongoose=require('mongoose');

var qualificationSchema=mongoose.Shcema({
    empNo: String,
  	techSkills: String,
  	digithonCleared:String,
  	digitalAcademy:
    {
    	trainingComplete: String,
    	trainingType: String,
    	trainingCompletionDate: String,
    },
  	agileTraining: String,
  	bfsiTraining: String,
  	skillGapTrainingComplete: String,
  	skillGap: String
});

module.exports=mongoose.model("qualification",qualificationSchema,'qualifications');

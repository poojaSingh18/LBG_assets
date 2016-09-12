var mongoose=require('mongoose');

var qualificationSchema=mongoose.Schema({
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

qualificationSchema.statics.insetQualificationDetails=function(callback)
{
  this.create({
    empNo: '326322',
    techSkills:'j2ee-Spring/Hibernate, MEAN',
    digithonCleared:'yes',
    digitalAcademy:
    {
      trainingComplete: 'yes',
      trainingType:'immersive',
      trainingCompletionDate: '15-6-2016',
    },
    agileTraining: 'yes',
    bfsiTraining: 'yes',
    skillGapTrainingComplete: '',
    skillGap: ''
  },function(err,result)
  {
    if(!err)
      callback(null,result);
  })
}

qualificationSchema.statics.getQualificationDetails=function(empNo,callback)
{
  this.findOne({
    "empNo":empNo
  },function(err,result)
  {
    if(!err)
      {
        console.log(result);
        callback(null,result);
      }
    else {
      callback(err,null);

    }
})
}

qualificationSchema.statics.updateQualificationDetails=function(empNo,newObject,callback)
  {

  }

module.exports=mongoose.model("qualification",qualificationSchema,'qualifications');

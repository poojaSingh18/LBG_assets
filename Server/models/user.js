var mongoose=require('mongoose');

var userSchema=mongoose.Schema({
  userName:String,
  password:String,
  email:String

});

module.exports=mongoose.model('user',userSchema,'users');

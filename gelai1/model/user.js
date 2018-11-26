var mongoose=require("../mong/mongo.js");
	var Schema = mongoose.Schema;
		var UserSchema = new Schema({
			username:{type:String},
			password:{type:String},
			usertel:{type:String}
		})
var User = mongoose.model("User",UserSchema);
module.exports=User;
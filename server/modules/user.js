const mongoose=require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		userName: { type: String, required: true, unique:true},
		name: { type: String, required: true},
        email: {type:String,required:true, unique: true },
        phonenumber: {type:Number,required:true, unique: true },
		password: { type: String, required: true },
		con_password: { type: String, required: true },
		collegeName: { type: String, required: true }
	},
	{ collection: 'user-list' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model
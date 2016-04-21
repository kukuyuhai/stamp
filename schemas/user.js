var mongoose = require('mongoose')
//创建骨架，schema不具有操作数据库的能力
var UserSchema = new mongoose.Schema({
	name:{
		unique:true,
		type:String
	},
	password:String,
	email:{
		type:String,
		default:''
	},
	role:{
		type:Number,
		default:0
	},
	meta:{
		creat_at:{
			type:Date,
			default:Date.now()
		},
		upDate_at:{
			type:Date,
			default:Date.now()
		}
	}
})


module.exports = UserSchema

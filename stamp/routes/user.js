var mongoose = require('mongoose');
var User = require('../models/user');
var User = new User;

exports.showSignup = function(req,res){
	res.render('signup',{title:'signup'})
}
exports.showSignin = function(req,res){
	res.render('signin',{title:'signin'})
}

exports.signup  = function(req,res) {
	res.send(200)
	// var _user = req.body.user;

	// User.findOne({name:_user.name},function(err,user){
	// 	if(err){
	// 		console.log(err)
	// 	}

	// 	if(user){
	// 		return res.redirect('/signin')
	// 	}else{
	// 		//存入数据库
	// 		user = new User(_user)
	// 		user.save(function(err,user){
	// 			if(err){
	// 				console.log(err)
	// 			}
	// 			res.resdirect('/')
	// 		})
	// 	}
	// })	
}

exports.signin = function(req,res){
	res.send(200);
}
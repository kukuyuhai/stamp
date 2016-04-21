var index = require('../routes/index')
var User = require('../routes/user')

module.exports = function(app){
	//index
	app.get('/',index.index)
	//user route config
	app.get('/signup',User.showSignup)
	app.get('/signin',User.showSignin)
	app.post('/user/signup',User.signup)
	app.post('/user/signin',User.signin)

}

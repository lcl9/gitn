// var mongoose = require('mongoose'),    //加载mongoose模块
// DB_URL = 'mongodb://localhost:27017/galaxy';
// mongoose.Promise = global.Promise;  
// //连接数据库
// mongoose.connect(DB_URL);
// //连接成功
// mongoose.connection.on('connected', function () {    
//     console.log('Mongoose connection open to ' + DB_URL);  
// });   
// // 连接异常
// mongoose.connection.on('error',function (err) {    
//     console.log('Mongoose connection error: ' + err);  
// });    
// // 连接断开
// mongoose.connection.on('disconnected', function () {    
//     console.log('Mongoose connection disconnected');  
// });   
// module.exports = mongoose;   //导出mongoose对象
var mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/galaxy");
	mongoose.connection.on("connected",function(){
		console.log("成功");		    
	})
	mongoose.connection.on("error",function(){
		console.log("失败");
	})
	mongoose.connection.on("disconnected",function(){
		console.log("断开");
	})
module.exports=mongoose;



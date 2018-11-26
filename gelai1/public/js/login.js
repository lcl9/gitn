$(function(){
	//图片验证码功能
	var verifyCode = new identifying("v_container");
	$("#button").click(function(){
		var res = verifyCode.validate($("#code_input").val());
		var userName=$("#userName").val();
	    var userPass=$("#userPass").val();
		if(!res){
			$("#tip").html("图片验证码错误，请重新输入！")
		}else{
			if(userName!=""&&userPass!=""){
				$.ajax({
					url:url+"/login",
					data:{
						username:userName,
						password:userPass
					},
					async:true,
					type:"POST",
					success:function(result){
						console.log(typeof result)
						if(result.errCode==0){			
							localStorage.tokenID=result.tokenID;
							localStorage.username=result.username;
							window.location.href="index.html";
						}else{
							console.log(123);
							$("#tip").html("用户名或密码错误！")
						}
					},
					error:function(err){
						console.log("请求错误");
					}
				});
			}else{
				$("#tip").html("用户名和密码必须填写")
			}
		}
	})	
})

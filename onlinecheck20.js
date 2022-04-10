document.getElementById("tips").value="平利软件 在线服务中&#13;授权码是20220430wxt"
        function handin(){        
	var password=document.getElementById("password").value;	
	if(password=='20220430wxt'){window.alert("授权码正确！");location="choose.html"}	
	else if(password==''){window.alert("授权码不能为空！")}	
	else {window.alert("授权码错误")}	
	              }

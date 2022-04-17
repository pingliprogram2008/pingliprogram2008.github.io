document.getElementById("tips").innerHTML="平利软件 在线服务中&#10;免密登陆中&#10;广告位招租！&#10;广告位招租！"
        function handin(){        
	var password=document.getElementById("password").value;	
	if(password=='20220416wxt'){window.alert("授权码正确！");location="choose.html"}	
	else if(password==''){window.alert("授权码不能为空！")}	
	else {window.alert("授权码错误")}	
	              }

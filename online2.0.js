document.getElementById("tips").innerHTML="平利软件 在线服务中&#10;免密登陆中&#10;广告位招租！&#10;广告位招租！"
document.getElementById("olpswcheck").innerHTML="<input type=password id=password placeholder=请输入授权码><input type=button onClick=handin() value=提交><input type=button value=重置 onclick=olres()>"
        function handin(){        
	var password=document.getElementById("password").value;	
	if(password=='20220416wxt'){window.alert("授权码正确！");location="choose.html"}	
	else if(password==''){window.alert("授权码不能为空！")}	
	else {window.alert("授权码错误")}	
	              }
        function olres(){
	document.getElementById("password").innerHTML=""
	}

function verify()
{
	const userInfo1 = {
		'name': "chiro@2002",
		'pass': "96.53.24.13.34.2.4.7.14.28.63", //mcmcQR@3456
	}			
	const userInfo2 = {
		'name': "amrit@2001",
		'pass': "",
	}
	const userInfo3 = {
		'name': "sourav@2001",
		'pass': "",
	}
	const userInfo4 = {
		'name': "sanjib@2002",
		'pass': "",
	}

	const uname = document.getElementById("name").value;
	const pwd = document.getElementById("pass").value;

	if(uname=="" || pwd=="")
	{
		alert("Kaka moja peyecho???")
		return;
	}

	var k = [];
	for(let i=0; i<pwd.length; i++)
		k.push(((pwd.charCodeAt(i)^pwd.length)>>(pwd.length%(i+1))).toString());
	var cpass = k.join('.');
	//alert(cpass);

	var userInfo = [userInfo1, userInfo2, userInfo3, userInfo4];

	for(let i=0; i<4; i++)
		if(uname==userInfo[i].name && cpass==userInfo[i].pass)
		{
			alert("Verified :)");
			window.close();
			return;
		}
	
	alert("wrong Username or Password !!!");
}

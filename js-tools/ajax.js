var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(event){
	if(xhr.readystate ==4 ){
		if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
			//do something...
		}
	}
}

//post way
xhr.open("post", "example.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("name=pam&age=21");

//get way
xhr.open("get", "exmaple.php?name=pam&age=21", true);
xhr.send(null);
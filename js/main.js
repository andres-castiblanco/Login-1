function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	

	/* Equipo Nacional */
		var coruser = "alvaro.castro";
		var corpass = "400297";
	
	if(user.value == coruser) {
	
		if(pass.value == corpass) {
		
			/*window.alert("You are logged in as " + user.value);*/
			window.open("https://andres-castiblanco.github.io/SF-2022","_self");
		
		} else {
		
			window.alert("Usuario o clave incorrecta!, Vuelva a intentar");
		
		}

	
	} 

		var coruser1 = "camilo.enriquez";
		var corpass1 = "585694";

		if(user.value == coruser1) {
		
			if(pass.value == corpass1) {
			
				/*window.alert("You are logged in as " + user.value);*/
				window.open("https://andres-castiblanco.github.io/SF-2022/11001.html","_self");
			
			} else {
			
				window.alert("Usuario o clave incorrecta!, Vuelva a intentar!");
			
			}
		
		} 

		var coruser2 = "CV";
		var corpass2 = "012345";

		if(user.value == coruser2) {
		
			if(pass.value == corpass2) {
			
				/*window.alert("You are logged in as " + user.value);*/
				window.open("https://andres-castiblanco.github.io/CV/","_self");
			
			} else {
			
				window.alert("Usuario o clave incorrecta!, Vuelva a intentar!");
			
			}
		
		} 

		var coruser3 = "---";
		var corpass3 = "---";

		if(user.value == coruser3) {
		
			if(pass.value == corpass3) {
			
				/*window.alert("You are logged in as " + user.value);*/
				window.open("https://google.com/","_self");
			
			} else {
			
				window.alert("Usuario o clave incorrecta!, Vuelva a intentar!");
			
			}
		
		} 

		var coruser4 = "----";
		var corpass4 = "----";

		if(user.value == coruser4) {
		
			if(pass.value == corpass4) {
			
				/*window.alert("You are logged in as " + user.value);*/
				window.open("https://google.com/","_self");
			
			} else {
			
				window.alert("Usuario o clave incorrecta!, Vuelva a intentar!");
			
			}
		
		} 

	else {
		
			window.alert("Incorrect username or password!");
		
		}

}


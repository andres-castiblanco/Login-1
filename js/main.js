function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	

	/* Equipo Nacional */
		var coruser = "alvaro.castro";
		var corpass = "400297";
	
	if(user.value == coruser) {
	
		if(pass.value == corpass) {
		
			/*window.alert("You are logged in as " + user.value);*/
			window.open("https://andres-castiblanco.github.io/SF-2022/11001.html","_self");
	
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

		var coruser2 = "camilo.lema";
		var corpass2 = "758493";

		if(user.value == coruser2) {
		
			if(pass.value == corpass2) {
			
				/*window.alert("You are logged in as " + user.value);*/
				window.open("https://andres-castiblanco.github.io/SF-2022/vallas.html","_self");
			
			} else {
			
				window.alert("Usuario o clave incorrecta!, Vuelva a intentar!");
			
			}
		
		}

		var coruser3 = "CV";
		var corpass3 = "012345";

		if(user.value == coruser3) {
		
			if(pass.value == corpass3) {
			
				/*window.alert("You are logged in as " + user.value);*/
				window.open("https://app.powerbi.com/view?r=eyJrIjoiYjk0NGY1YWEtZGNkZi00NTU4LWE5ZjctZDY4ZDY5YjgwNDMwIiwidCI6IjU3N2ZjMWQ4LTA5MjItNDU4ZS04N2JmLWVjNGY0NTVlYjYwMCIsImMiOjR9&pageName=ReportSection","_self");
			
			} else {
			
				window.alert("Usuario o clave incorrecta!, Vuelva a intentar!");
			
			}
		
		} 

		var coruser4 = "---";
		var corpass4 = "---";

		if(user.value == coruser4) {
		
			if(pass.value == corpass4) {
			
				/*window.alert("You are logged in as " + user.value);*/
				window.open("https://google.com/","_self");
			
			} else {
			
				window.alert("Usuario o clave incorrecta!, Vuelva a intentar!");
			
			}
		
		} 

		var coruser5 = "----";
		var corpass5 = "----";

		if(user.value == coruser5) {
		
			if(pass.value == corpass5) {
			
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


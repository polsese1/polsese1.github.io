let nombre_field;
let nacimiento_field;
let color_field;
let comentario_field;
let subscribe_field;
let contact_form;

document.addEventListener("DOMContentLoaded", (event) => {
	
	nombre_field = document.getElementById("campo-nombre");
	nacimiento_field = document.getElementById("campo-date");
	color_field = document.getElementById("campo-color");
	comentario_field = document.getElementById("campo-comentario");
	subscribe_field = document.getElementById("campo-subscribe");
	contact_form = document.getElementById("contact-form");

	subscribe_field.addEventListener("click", function(event){
		if (event.target.checked){
			console.log("JAJAJAJAJA! Tu alma es mia");
		}else{
			console.log("Noooooooooooooooo!");
		}
	});
	
	contact_form.addEventListener("submit", (event) => {
		let send = true;
		
		if(nombre_field.value.length <= 2 || nombre_field.value.length > 32){
			send = false;
			nombre_field.style.border = "1px solid red";
		}
		else{
			nombre_field.style.border = "1px solid green";
		}
		
		console.log(nacimiento_field.value);
		if(nacimiento_field.value == "" || nacimiento_field.value.length != 10){
			send = false;
			nacimiento_field.style.border = "1px solid red";
		}
		else{
			let date = nacimiento_field.value.split("-");
			
			
			let year = parseInt(date[0])
			let month = parseInt(date[1])
			let day = parseInt(date[2])
			
			console.log(date[0],date[1],date[2]);
			console.log(year,month,day);

			if (isNaN(year) || isNaN(month) || isNaN(day)){
				send = false;
				nacimiento_field.style.board = "1px solid red";
			}else{
			if (year <= 0 || year > 2025){
				send = false;
				nacimiento_field.style.border = "1px solid red";
			}
			else if(month <= 0 || month > 12){
				send = false;
				nacimiento_field.style.border = "1px solid red";
			}
			else if(day <= 0 || day > 31){
				send = false;
				nacimiento_field.style.border = "1px solid red";
			}else{
				color_field.style.border = "1px solid green";
			}
		}
	}
		if (color_field.value.length != 7){
				send = false;
				color_field.style.border = "1px solid red";
		}else{
			if (color_field.value[0] != "#"){
				send = false;
				color_field.style.border = "1px solid red";
			}
			else{
				color_field.style.border = "1px solid green";
			}
		}
		
		if(comentario_field.value.length < 5 || comentario_field.value.length > 255){
			send = false;
			comentario_field.style.border = "1px solid red";
		}
		else {
			comentario_field.value.replace(/'/g, "\\'");
		}
		
		send = false;
		if(!send){
			event.preventDefault();
			
		}
	});


});



/*function validar_numero(event){
	event.preventDefault();
	let nombre = document.getElementById("campo-nombre");
    let password = document.getElementById("campo-contrasenya");
    let date = document.getElementById("campo-date");
    let edat = document.getElementById("campo-edat");
		
	if (nombre.value == "") { 
        nombre.classList.add("field-error");
    } 
	else {
        nombre.classList.remove("field-error");
    }

    if (password.value == "") {
        password.classList.add("field-error");
    } 
	else {
        password.classList.remove("field-error");
    }

    if (date.value == "") {
        date.classList.add("field-error");
    } 
	else {
        date.classList.remove("field-error");
    }
	if (edat.value == "") {
        edat.classList.add("field-error");
	} else {
		edat.classList.remove("field-error");
		}
	}
	document.getElementById("contact-form").addEventListener("submit", validar_numero);*/
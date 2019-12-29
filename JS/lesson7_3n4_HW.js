// Задача № 3

let checkbox = document.querySelector('#check');
let text = document.getElementById('text');

	checkbox.addEventListener("change", function () { 

		if (text.hasAttribute("disabled")) {
		text.removeAttribute("disabled")
		}
		else text.setAttribute("disabled", 1);
		// console.log(text.hasAttribute("disabled"));
	});


// Задача № 4

let login = document.querySelector('#login');
let psw = document.querySelector('#psw');
let ask  = document.querySelectorAll('.bottom');

let style1 = ask[0].style;

			login.addEventListener("focus",  () => {
				if (login.value.length <= 3) {
					style1.borderBottom = "5px solid red" 
				}
			});


			login.addEventListener("blur", () => {
				if (login.value.length > 3) {
					style1.borderBottom = "5px solid green"; 
				}
				else {
					style1.borderBottom = "5px solid red"
				}
			});

let style2 = ask[1].style;

			psw.addEventListener("focus",  function () {
				if (this.value.length <= 5) {
					style2.borderBottom = "5px solid red" ;
				}
			});


			psw.addEventListener("blur", function() {
				if (this.value.length > 5) {
					style2.borderBottom = "5px solid green"; 
				}
				else {
					style2.borderBottom = "5px solid red";
				}
			});

let form = document.forms.len;


form.addEventListener("submit", () => {
	console.log("login: " + login.value);
	console.log("password: " + psw.value);
});

let reset  = document.querySelector('#reset');

reset.addEventListener("click", () => {
	login.value = "";
	psw.value = "";
	style1.borderBottom = "5px solid red";
	style2.borderBottom = "5px solid red";
});
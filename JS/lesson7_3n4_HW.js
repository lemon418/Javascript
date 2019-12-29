// let checkbox = document.getElementById('check');

let checkbox = document.querySelector('#check');
let text = document.getElementById('text');
	checkbox.addEventListener("change", function () { 


	if (text.hasAttribute("disabled")) {
		text.removeAttribute("disabled")
	}
	else text.setAttribute("disabled", 1);
	console.log(text.hasAttribute("disabled"));
});

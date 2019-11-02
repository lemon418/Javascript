// Задача №1
let str = "Amsterdam Moscow San-Francisco New-York Urupinsk";
function alph(someStr) {
	let arr = someStr.split(" ");
	arr.sort();
	console.log(arr);
}
alph(str);
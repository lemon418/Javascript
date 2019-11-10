// Задача №1
let str = "Amsterdam Moscow San-Francisco New-York Urupinsk";
function alph(someStr) {
	let arr = someStr.split(" ");
	arr.sort();
	console.log(arr);
}
alph(str);



// Задача №2

let str2 = prompt();
let target = prompt();

let pos = str2.indexOf(target);
let count = 0;
while (pos !== -1) {
		count++;
		pos = str2.indexOf(target, pos + 1);
}
console.log(`Найдено ${count} совпадений`);



// Задача №3

let str4 = "пяяgяяп"; 

function ifPolindrom(ifPol) {
	let mid = ifPol.length / 2;
	let strB =  ifPol.slice(0 , -mid);
	let strC = ifPol.slice(-mid - 0.5, ifPol.length);
	let arrC = strC.split("");  //превращаем одну из строк в массив
	arrC.reverse(); 			// реверсируем массив
	let revStrC = arrC.join(""); // склеиваем реверсный массив в строку
	// console.log(revStrC);
	// console.log(strB);
	 if (strB == revStrC) {
 		 console.log("Строка является полиндромом");
	}
	 else if (strB !== revStrC) {
	 	 console.log("Строка не является полиндромом");
	 }
}

ifPolindrom(str4);

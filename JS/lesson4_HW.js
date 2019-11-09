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
let strSub = prompt();

let sum = str2.indexOf(strSub);


if (sum === -1) {
	alert("Ничего не найдено");
}

else if (sum >= 0) {
	alert("Совпадение присутствует");
}


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

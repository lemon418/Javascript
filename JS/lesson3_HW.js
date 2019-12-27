// Задача №1

function sum(num) {
	if(num >= 1) {
		return (num % 10) + sum(Math.floor(num / 10));
	}
}
console.log(sum(321));

// Задача №2

let arr = [];

function range(start, end, step = 1) {
	while (start <= end) {
		arr.push(start);
		start = start + step;
	} 
}

range(1, 10, 3);
console.log(arr);

// Задача №3   
    //.вариант1

let str = "день";
let str2 = "дня";
let str3 = "дней";

function days(count) {
	if (count === 1) {
		console.log(count + " " + str);
	}

	if (count >= 2 && count <= 4) {
		console.log(count + " " + str2);
	}

	else {
		console.log(count + " " + str3);
	}
}
days(1);

    // Вариант№2


function days(count) {
	let le = `${count}`;
	if (le.lastIndexOf("1") === le.length - 1) {
		console.log(`${le} день`);
	}

	else if (le.lastIndexOf("2") ||
	    le.lastIndexOf("3") ||
	    le.lastIndexOf("4") === le.length - 1) {
		console.log(`${le} дня`);
	}

	else {
		console.log(`${le} дней`);
	}
	
}

for (var i = 0; i < 100; i++) {
	days(i);
}


	// Задача№4

let array = [];

function genArr(maxLength, maxNumber) {
	for(let i = 0; i < 5; i++){
		array[i] = [];
		arrLength = Math.floor(Math.random() * maxLength);
		for (let c = 0; c <= arrLength; c++) {
			num = Math.floor(Math.random() * maxNumber + 1);
			array[i].push(num);
		}
 	}
 	array.forEach(item => console.log(item));	
}

genArr(10, 9);


let id = 0;
function sum(arr) { // функция считающая сумму чисел в каждом вложеном массиве
	let countArr = [];
		for (let i = 0; i < arr.length; i++) {
			let count = 0;
			for (let c = 0; c < arr[i].length; c++) {
        		count += arr[i][c];	
			}
    		countArr.push(count);
			console.log("сумма массива : " +count);
		}
	getMax(countArr); //вложенная функция
}

sum(array);

function getMax(arry) { // функция определяющая наибольшее значение в массиве
	let max = arry[0]; // берем первый элемент массива
    for (let i = 0; i < arry.length; i++) { // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
        if (max < arry[i]) {
        	max = arry[i]; 
        	id = i;
        }	
    }
    console.log("Найбольшая сумма среди всех массиво: " + max);
    return max;

}
console.log("Массив с максимальной суммой эементов: ");
console.log(array[id]);

















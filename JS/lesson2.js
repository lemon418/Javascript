
// Задача №1
let num = [2, 6, 5, 3, 1, 7, 0];
let a = 0;
	for (let i = 0; i < num.length; i++) {
		for (let q = 1 + a; q < num.length; q++) {
			if (num[i] + num[q] === 7) {
				console.log("сумма чисел " + num[i] + " и " + num[q] + " равна 7");
			}  	
		}
		a = a + 1;
	}

// Задача №2

		/*часть 1*/
for (let i = 1 ; i <= 100; i++) {

	if ((i % 5 === 0) && (i % 3 !== 0)) {
		console.log("Five");

	}
	else  if (i % 3 === 0) {
	console.log("Three");
	}
	else {
		console.log(i);
	}
}


		/*часть 2*/
for (let i = 1; i <= 100; i++) {
	if ((i % 3 === 0) && (i % 5 === 0)) {
		console.log("ThreeFive");
	}
	else {
		console.log(i);
	}
}


// Задача №3


let plates = 23;
let wash = 18;

console.log("Осталось " + plates + " тарелок");
console.log("Осталось " + wash + " моющего средства");

while(0 < plates && 0.5 <= wash) {
	wash = wash - 0.5; 
	plates = plates - 1;
	console.log("Осталось " + plates + " тарелок");
	console.log("Осталось " + wash + " моющего средства");
}

// Задача №4

let arr = [5, 6, 8];
let arr2 = [8, 6, 5];
console.log(arr);
console.log(arr2);

let sum = 0;
 for (i = 0; i < arr.length; i++) {
 	sum += arr[i];
 }
let result = sum / arr.length;
console.log("Среднее арифмитическое первого массива = " + result);	


let sum2 = 0;
 for (i = 0; i < arr2.length; i++) {
 	sum2 += arr2[i];
 }
 let result2 = sum2 / arr2.length;
console.log("Среднее арифмитическое второго массива = " + result2);

if (sum > sum2) {
	console.log("Средняя сумма первого массива больше");
}
else if (sum < sum2) {
	console.log("Средняя арифмитическая сумма второго массива больше");
}
else {
	console.log("средние арифметические суммы двух массивов равны");
}

// Задача №5

		/*Часть №1*/

let arr3 = [];

for (i = 1; i <= 5; i++) {
arr3.push(prompt("Введите число"));
}
console.log(arr3.reverse());


        /*Часть №2*/

let num2 = 1;        
for (i = 1; i <= 20; i++) {
	num2 = num2 * 2;
	console.log(num2);
}

		/*Часть №3*/

a = "#";
for (i = 1; i <= 10; i++) {
	console.log(a);
	a = a + "#"
}



